import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="flex  mt-6">
      <motion.div
        className=" p-6 flex flex-col gap-8"
        initial={{ opacity: 0, translateX: -100 }}
        animate={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-7xl text-[#444a4f] leading-[5rem] tracking-wider drop-shadow-xl ">
          Web Resources Hub
        </h1>
        <h2 className="text-4xl text-[#3f454a] leading-[4rem] tracking-wider  drop-shadow-xl">
          Get Empowered <span className=" text-[]"> with </span> <br />
          Web Development
          <br />
          <span className=" text-[]"> Resources </span>
        </h2>
        <p className="text-lg w-4/5 text-[#858585]">
          Explore our vast collection of web development resources, designed to
          give you the knowledge and tools you need to
          <br />
          succeed in the world of web development!
        </p>
      </motion.div>
    </div>
  );
}
