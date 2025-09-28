import React from "react";
import { motion } from "framer-motion";

const Card = ({ title, link, description = "", i, img }) => {
  // Define the primary red glow/accent color for Tailwind shadows
  const RED_GLOW_SHADOW = "shadow-[0_0_15px_rgba(220,38,38,0.7)]";

  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      aria-label={`Open ${title}`}
      className="group block relative"
    >
      <motion.div
        className={`
          card 
          relative 
          // 1. Theme: Dark background, border, and aggressive shadow on hover
          bg-gray-900 
          border border-gray-700 
          flex flex-col rounded-xl 
          shadow-lg 
          h-[18rem] w-[22rem] 
          transition-all duration-300 ease-in-out 
          
          // Apply red accent hover styles
          hover:border-red-600 
          hover:shadow-xl hover:${RED_GLOW_SHADOW}
          hover:-translate-y-2
        `}
        key={i}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: i * 0.1 }}
      >
        {/* Image Section - Make image more prominent, like a game cover */}
        <div className="img-container h-[70%] w-full relative">
          <img
            // Fill container, sharp corners, and transition
            className="w-full h-full object-cover rounded-t-xl border-b border-gray-700 transition-all duration-300 group-hover:border-red-600"
            src={img}
            alt={title}
          />
          {/* Subtle overlay for image to help text contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent rounded-t-xl"></div>
        </div>

        {/* Content Section - Minimal padding for content block */}
        <div className="content flex flex-col gap-1 items-start text-left p-3">
          <h2 
            // 2. Title Styling: Bold white text, transition to Red accent on hover
            className="
              text-lg font-extrabold text-white uppercase
              transition-colors duration-200 
              group-hover:text-red-500 
              group-hover:drop-shadow-[0_0_5px_rgba(220,38,38,0.8)]
            "
          >
            {title}
          </h2>

          {/* 3. Description Styling: Muted gray text */}
          <p className="text-xs text-gray-400 w-full tracking-wide leading-4">
            {description.length > 80 // Reduced description length for compact look
              ? description.slice(0, 80) + "..."
              : description}
          </p>
        </div>
      </motion.div>
    </a>
  );
};

export default Card;