import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
// Removed external imports for React Icons (FaHtml5, FaCss3Alt, FaJsSquare, FaPlay)
// and replaced them with inline SVG definitions below.

// Constants for consistent styling
const PRIMARY_RED = "red-600";
const RED_GLOW_SHADOW = "shadow-[0_0_15px_rgba(220,38,38,0.7)]";

const initialHtml = `<h1>Hello Quest!</h1>`;
const initialCss = `
body {
  font-family: sans-serif;
  color: #DDD;
  padding: 20px;
}
h1 {
  color: #DC2626; /* Equivalent to red-600 */
}
`;
const initialJs = `console.log('Code running!');`;

// Inline SVG Icons to replace external libraries
const HtmlIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M64 32c-17.7 0-32 14.3-32 32l0 400c0 17.7 14.3 32 32 32l384 0c17.7 0 32-14.3 32-32l0-400c0-17.7-14.3-32-32-32L64 32zM212.5 136.8l-1.9 22.7L250.7 200l-40.1 40.2l1.9 22.7l64.3 64.3c1.3 1.3 3.4 1.7 5.1 1l59.6-19.9l1.9-22.7l-55.8 18.6l-37.4-37.5l40.1-40.2l1.9-22.7l-64.3-64.3c-1.3-1.3-3.4-1.7-5.1-1L212.5 136.8zm114.2 119.8l40.1 40.2l-1.9 22.7l-64.3 64.3c-1.3 1.3-3.4 1.7-5.1 1L212.5 321.2l1.9-22.7l55.8-18.6l37.4 37.5z"/></svg>
);
const CssIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M141.5 289.4L188 349.5l-2.4 28.5l-63.5-21.2c-1.4-0.5-2.2-1.9-2-3.4l2.4-28.5zM370.5 289.4l-46.5 60.1l2.4 28.5l63.5-21.2c1.4-0.5 2.2-1.9 2-3.4l-2.4-28.5zM226 211.5l-2.4 28.5l47 47l-28.5 2.4l-75-75l2.4-28.5l75 75zM324 211.5l2.4 28.5l-47 47l28.5 2.4l75-75l-2.4-28.5l-75 75zM256 32c141.4 0 256 114.6 256 256s-114.6 256-256 256S0 397.4 0 256 114.6 32 256 32zm0 416c88.4 0 160-71.6 160-160s-71.6-160-160-160-160 71.6-160 160 71.6 160 160 160z"/></svg>
);
const JsIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M0 64C0 28.7 28.7 0 64 0H384c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm171.7 151.6c4-4 4-10.5 0-14.5l-16.7-16.7c-4-4-10.5-4-14.5 0L112 214.3l-28.5-28.5c-4-4-10.5-4-14.5 0l-16.7 16.7c-4 4-4 10.5 0 14.5l47.7 47.7c4 4 10.5 4 14.5 0l47.7-47.7zM368 288h-48V208h-16v80h-48v16h112v-16z"/></svg>
);

const Index = () => {
    const [htmlCode, setHtmlCode] = useState(initialHtml);
    const [cssCode, setCssCode] = useState(initialCss);
    const [jsCode, setJsCode] = useState(initialJs);
    const [srcDoc, setSrcDoc] = useState('');
    const [activeTab, setActiveTab] = useState('html');

    // Combine and run code every time one of the code states changes
    useEffect(() => {
        const timeout = setTimeout(() => {
            // Note on H1 color: Tailwind classes cannot be used dynamically inside this injected CSS string,
            // so using the hex equivalent of red-600 (#DC2626) is necessary for styling within the iframe.
            const document = `
                <html>
                    <head>
                        <style>${cssCode}</style>
                    </head>
                    <body>
                        ${htmlCode}
                        <script>
                            // This part ensures console output and errors are handled in the parent window.
                            const originalConsoleLog = console.log;
                            console.log = function(...args) {
                                window.parent.postMessage({ type: 'log', content: args.join(' ') }, '*');
                                originalConsoleLog.apply(console, args);
                            };
                            
                            // Execute user JavaScript code
                            try {
                                ${jsCode}
                            } catch (error) {
                                window.parent.postMessage({ type: 'error', content: error.toString() }, '*');
                            }
                        </script>
                    </body>
                </html>
            `;
            setSrcDoc(document);
        }, 300); // Debounce compilation for better performance

        return () => clearTimeout(timeout);
    }, [htmlCode, cssCode, jsCode]);

    const handleReset = () => {
        setHtmlCode(initialHtml);
        setCssCode(initialCss);
        setJsCode(initialJs);
    };

    const CodeInput = ({ language, code, setCode }) => (
        <textarea
            className="w-full h-full p-4 text-sm resize-none bg-gray-800 text-gray-200 outline-none border-t-2 border-red-700/50 focus:border-red-500/80 transition-colors duration-200 font-mono"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            spellCheck="false"
            placeholder={`Enter your ${language} code here...`}
        />
    );

    const CodeTab = ({ lang, icon, label, isActive }) => (
        <button
            onClick={() => setActiveTab(lang)}
            className={`flex items-center gap-2 py-2 px-4 text-lg font-semibold transition-all duration-200 rounded-t-lg
                        ${isActive
                            ? `bg-gray-800 text-red-600 border-b-4 border-red-600 shadow-inner`
                            : 'bg-gray-700 text-gray-400 hover:bg-gray-600 hover:text-white'
                        }`}
        >
            {icon}
            {label}
        </button>
    );


    return (
        <div className="min-h-screen bg-gray-950 px-6 py-10 pt-20 lg:pt-8 max-w-7xl mx-auto">
            
            {/* Title */}
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className={`text-4xl md:text-5xl font-extrabold text-center text-white uppercase 
                            tracking-wide drop-shadow-[0_0_15px_rgba(220,38,38,0.7)] mb-10 font-pixel`}
            >
                🎮 LIVE CODE EDITOR
            </motion.h1>

            {/* Editor Container */}
            <div className="bg-gray-900 rounded-xl shadow-2xl overflow-hidden border border-red-900/50">
                
                {/* Control Panel and Tabs */}
                <div className="flex justify-between items-end p-2 bg-gray-900">
                    <div className="flex gap-1">
                        <CodeTab 
                            lang="html" 
                            icon={<HtmlIcon className="w-5 h-5"/>} 
                            label="HTML" 
                            isActive={activeTab === 'html'} 
                        />
                        <CodeTab 
                            lang="css" 
                            icon={<CssIcon className="w-5 h-5"/>} 
                            label="CSS" 
                            isActive={activeTab === 'css'} 
                        />
                        <CodeTab 
                            lang="js" 
                            icon={<JsIcon className="w-5 h-5"/>} 
                            label="JavaScript" 
                            isActive={activeTab === 'js'} 
                        />
                    </div>
                    
                    <motion.button
                        onClick={handleReset}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-4 py-1 text-sm font-bold rounded-lg bg-${PRIMARY_RED} text-white 
                                    shadow-md shadow-red-900/50 hover:bg-red-700 transition-colors duration-200`}
                    >
                        RESET
                    </motion.button>
                </div>

                {/* Code Input & Output Area */}
                <div className="grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 h-[70vh] w-full">
                    
                    {/* Code Input (Left/Top Pane) */}
                    <div className="relative border-r-4 border-black">
                        {activeTab === 'html' && <CodeInput language="HTML" code={htmlCode} setCode={setHtmlCode} />}
                        {activeTab === 'css' && <CodeInput language="CSS" code={cssCode} setCode={setCssCode} />}
                        {activeTab === 'js' && <CodeInput language="JavaScript" code={jsCode} setCode={setJsCode} />}
                    </div>

                    {/* Live Output (Right/Bottom Pane) */}
                    <div className={`relative bg-white p-2 border-t-2 lg:border-t-0 border-red-700/50`}>
                        <h3 className="absolute top-0 left-0 right-0 p-1 text-center text-xs font-semibold text-gray-500 bg-gray-100">
                            LIVE PREVIEW
                        </h3>
                        <iframe
                            title="live-output"
                            srcDoc={srcDoc}
                            sandbox="allow-scripts allow-modals" // Security restriction
                            className="w-full h-full bg-gray-900 p-4 pt-6"
                            frameBorder="0"
                        />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Index;
