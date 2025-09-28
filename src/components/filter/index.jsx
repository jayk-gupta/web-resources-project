import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";

const navItems = [
    { key: 'html', label: 'HTML' },
    { key: 'css', label: 'CSS' },
    { key: 'js', label: 'JAVASCRIPT' },
    { key: 'react', label: 'REACTJS' },
    { key: 'tailwind', label: 'TAILWIND' },
    { key: 'nextjs', label: 'NEXTJS' },
];

// Define primary accents for consistent game-style styling
const PRIMARY_RED = "red-600";

const index = ({ onStateChange, currentFilter = 'html' }) => {
    const location = useLocation();
    const navigate = useNavigate();
    
    const params = new URLSearchParams(location.search);
    const searchQuery = params.get('search') || '';

    const handleSearchChange = (e) => {
        const value = e.target.value;
        const newParams = new URLSearchParams();
        if (value) {
            newParams.set('search', value);
        }
        navigate({ search: newParams.toString() });
    };

    // handleNavClick is no longer strictly needed but kept as a stub if you add general navigation later
    // const handleNavClick = (path) => {
    //     navigate(path);
    // };

    return (
        <div className="flex flex-col gap-6 max-w-7xl mx-auto">
            
            {/* Navigation/Filter Buttons (The Navbar) */}
            <div className="flex flex-wrap justify-center gap-3 p-4 border-2 border-red-700 shadow-xl shadow-red-950/50 rounded-xl bg-gray-900">
                
                {/* Removed HOME and VIDEOS buttons. Now only showing navItems. */}

                {/* Internal Category Filter Buttons */}
                {navItems.map(item => {
                    const isActive = currentFilter === item.key;
                    
                    // Conditional Classes based on active state (Red background for active, hover black for inactive)
                    const buttonClasses = isActive
                        ? // ACTIVE STATE: Solid Red Background, white text, scale effect
                          `bg-${PRIMARY_RED} text-white shadow-lg shadow-red-900/50 scale-105 border border-white/50`
                        : // INACTIVE STATE: Gray background, hover turns darker (bg-black)
                          `bg-gray-700 text-gray-200 hover:bg-black hover:text-white`;

                    return (
                        <motion.button 
                            key={item.key}
                            onClick={() => onStateChange(item.key)}
                            className={`px-4 py-2 text-sm font-pixel uppercase rounded-lg transition-all duration-200 ${buttonClasses}`}
                        >
                            {item.label}
                        </motion.button>
                    )
                })}
            </div>

            {/* Search Bar - Responsive Design (w-full max-w-xl) */}
            <div className="flex justify-center w-full">
                <input
                    type="search"
                    placeholder="Search for a challenge, tool, or resource..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="w-full max-w-xl px-5 py-3 text-lg text-white bg-gray-800 border-2 border-red-700 rounded-full shadow-lg placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-red-500/50 transition-all duration-300"
                />
            </div>
        </div>
    );
};

export default index;
