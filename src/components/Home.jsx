import { motion } from "framer-motion";


export default function Home() {
  return (
    <div className=" w-full  flex mx-auto ml-16 mt-6">
      <motion.div
        className=" w-3/5 p-12 flex flex-col gap-8"
        initial={{ opacity: 0, translateX: -100 }}
        animate={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-7xl text-[#4b005e] leading-[5rem] tracking-wider font-lobster drop-shadow-xl ">
          Web Resources Hub
        </h1>
        <h2 className="text-4xl text-[#4b005e] leading-[4rem] tracking-wider font-merriweather  drop-shadow-xl">
          Get Empowered <span className=" text-[]"> with </span> <br />
          Web Development
          <br />
          <span className=" text-[]"> Resources </span>
        </h2>
        <p className="text-lg w-4/5 text-[#862e9c]">
          Explore our vast collection of web development resources,
          <br></br>
          designed to
          give you the knowledge and tools you need to
          <br/>
          succeed in the world of
          web development!
        </p>
      </motion.div>

      <div className="flex items-center w-1/2">
        <img
          className="w-full"
          src="https://user-images.githubusercontent.com/100681165/238192164-570dad2f-ba6d-4a35-8ae0-7fb364560653.svg"
          alt="logo"
        />
      </div>
      <div className=" w-full z-[-10] absolute left-0 bottom-0">
        <img
          className=""
          src="https://user-images.githubusercontent.com/100681165/238192175-4ed7ca3a-48f3-433b-84fd-f5e84aab3714.svg"
        ></img>
      </div>
    </div>
  );
}
