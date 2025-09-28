import { motion } from "framer-motion";
import { useEffect, useState } from "react";
// 🎯 Import the Link component from react-router-dom
import { Link } from 'react-router-dom'; 

export default function Home() {
  const text = "Web Resources Hub";
  
  const [currentText, setCurrentText] = useState(text); 
  const [showCursor, setShowCursor] = useState(false); 
  
  const PRIMARY_RED = "red-600";
  const RED_GLOW_SHADOW = "shadow-[0_0_25px_rgba(220,38,38,0.9)]";
  const SECONDARY_CYAN = "cyan-400"; 

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      // Nothing happens here now, as intended
    }, 300);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    // Background confirmed as bg-black
    <div className="flex relative justify-center items-center w-full h-screen bg-black">
      <motion.div
        className="p-8 flex flex-col gap-8 text-center items-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }} 
      >
        {/* Game-style glowing title */}
        <h1 
          className={`text-7xl font-extrabold tracking-widest text-white uppercase
                     ${RED_GLOW_SHADOW} drop-shadow-[0_0_20px_rgba(220,38,38,0.9)]`}
        >
          {currentText}
          {showCursor && <span className={`animate-pulse text-${SECONDARY_CYAN}`}>|</span>}
        </h1>

        {/* Sub-heading with neon glow */}
        <h2 
          className={`text-3xl md:text-4xl text-${SECONDARY_CYAN} font-bold tracking-wider 
                     drop-shadow-[0_0_15px_rgba(52,211,255,0.7)]`}
        >
          🚀 LEVEL UP WITH WEB DEV RESOURCES 🎮
        </h2>

        {/* XP Progress Bar */}
        <div className={`w-80 h-6 bg-gray-800 rounded-full border-2 border-${PRIMARY_RED} relative overflow-hidden shadow-lg`}>
          <motion.div
            className={`h-full bg-gradient-to-r from-${PRIMARY_RED} to-orange-500`}
            initial={{ width: 0 }}
            animate={{ width: "70%" }}
            transition={{ duration: 2 }}
          />
          <span className="absolute inset-0 flex justify-center items-center text-sm font-bold text-white">
            XP: 70/100
          </span>
        </div>

        {/* Game-style description */}
        <p className="text-lg md:w-3/4 text-gray-300 leading-relaxed drop-shadow-md">
          Collect knowledge. Unlock achievements. Master the web like a true
          player.  
          Your journey to becoming a <span className={`text-${PRIMARY_RED} font-bold`}>WEB DEV HERO</span> starts here!
        </p>

        {/* Button Group for CTA and Quiz */}
        <div className="flex gap-4">
            {/* 1. START YOUR QUEST button, linked to /resources */}
            <Link to="/resources">
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-8 py-3 mt-4 rounded-xl font-bold text-lg bg-${PRIMARY_RED} text-white uppercase 
                                ${RED_GLOW_SHADOW} hover:shadow-[0_0_35px_rgba(220,38,38,1)]`}
                >
                    🎯 START YOUR QUEST
                </motion.button>
            </Link>

            {/* 2. START QUIZ button, linked to /quiz */}
            <Link to="/quiz">
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-8 py-3 mt-4 rounded-xl font-bold text-lg bg-${SECONDARY_CYAN} text-white uppercase 
                                shadow-[0_0_25px_rgba(52,211,255,0.7)] hover:shadow-[0_0_35px_rgba(52,211,255,1)]`}
                >
                    🧠 START QUIZ
                </motion.button>
            </Link>
        </div>

      </motion.div>
    </div>
  );
}