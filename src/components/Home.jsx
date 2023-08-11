import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Home() {
  const [showText, setShowText] = useState(false);
  const text = "Web Resources Hub";
  const [currentText, setCurrentText] = useState("");
  const fixedCharacter = "W";
  const [showCursor, setShowCursor] = useState(true); // State to control cursor visibility

  const startTypewriter = () => {
    let index = currentText.length;
    const interval = setInterval(() => {
      if (index < text.length) {
        setCurrentText(text.substring(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setCurrentText(fixedCharacter);
          startTypewriter();
        }, 500);
      }
    }, 200);
  };

  useEffect(() => {
    setShowText(true);
    setCurrentText(fixedCharacter);
    startTypewriter();

    // Toggle cursor visibility with a blinking effect
    const cursorInterval = setInterval(() => {
      setShowCursor((prevShowCursor) => !prevShowCursor);
    }, 250);

    return () => {
      clearInterval(cursorInterval); // Clear interval on unmount
    };
  }, []);

  return (
    <div className="flex relative justify-start w-full h-screen mt-6">
      <motion.div
        className="p-4 flex flex-col gap-8 ml-2 lg:ml-20 mt-20 lg:mt-8"
        initial={{ opacity: 0, translateX: -100 }}
        animate={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-7xl text-[#444a4f] leading-[5rem] tracking-wider drop-shadow-xl font-bold">
          {currentText}
          {showCursor && <span className="cursor-blink">|</span>}
        </h1>
        <h2 className="text-4xl text-[#3f454a] leading-[4rem] tracking-wider drop-shadow-xl">
          Get Empowered <span className="text-[]"> with </span> <br />
          Web Development
          <br />
          <span className="text-[]"> Resources </span>
        </h2>
        <p className="text-lg w-4/5 text-[#858585]">
          Explore our vast collection of web development resources, designed to
          give you the knowledge and tools you need to succeed in the world of web development!
        </p>
      </motion.div>
    </div>
  );
}
