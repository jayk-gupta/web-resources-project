import { motion } from "framer-motion";

const Welcome = ({ section }) => {
  return (
    <motion.div
      className="mx-auto text-center my-10"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2
        // 1. Title Styling: White text with Red glow/shadow
        className="text-4xl md:text-5xl font-extrabold tracking-widest uppercase mb-4 
          text-white 
          drop-shadow-[0_0_15px_rgba(220,38,38,0.7)]"
      >
        {/* Removed the gradient and clip-text, using solid color and drop-shadow */}
        {`⚡ WELCOME TO ${section} SECTION ⚡`}
      </h2>
      <p className="font-bold tracking-wider text-xl text-gray-400">
        SELECT A TAG TO EXPLORE RESOURCES 🚀
      </p>
    </motion.div>
  );
};

export default Welcome;