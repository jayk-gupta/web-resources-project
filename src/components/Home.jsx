import { motion } from 'framer-motion';
import Navbar from './Header/Navbar';
import card1 from "../assets/card-1.png"
import card2 from "../assets/card-2.png"
import card3 from "../assets/card-3.webp"

export default function Home() {

  return (
    <div className='m-5 '>
      <div className='navbar '>
        <Navbar />
      </div>
      <div>
        <div className="w-full flex mx-auto ml-12 mt-14">
          <motion.div
            className="w-3/5 p-6 flex flex-col gap-8"
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
              designed to give you the knowledge and tools you need to
              <br />
              succeed in the world of web development!
            </p>
          </motion.div>

          <div className="flex items-center w-1/2">
            <img
              className="w-[80%]"
              src="https://user-images.githubusercontent.com/100681165/238192164-570dad2f-ba6d-4a35-8ae0-7fb364560653.svg"
              alt="logo"
            />
          </div>
        </div>
      </div>

      {/* feature card section starts */}

      <div>

        <div className='flex items-center justify-center mt-20'>
          <h1 className=' border-2 p-5 rounded-xl font-bold text-[#4b005e] text-xl mr-10'>Our features</h1>
        </div>

        <div className='flex mt-10'>
          <div className='flex  justify-center  p-5 max-w-[400px]'>
            <div className='flex flex-col items-center bg-[#D8BFD8] rounded-lg drop-shadow-md'>
              <div className='w-[30%] p-2 mb-5 mt-5'>
                <img src={card1} className='border-2 rounded-lg' />
              </div>
              <div className='flex flex-col items-center'>
                <h1 className='font-semibold text-xl underline decoration-2 '>Comprehensive Tutorials</h1>
                <p className='p-5 text-center text-[#484848]'>Explore in-depth tutorials on various web development topics, covering everything from frontend frameworks to backend technologies. Master the latest web technologies and stay up-to-date with the ever-evolving landscape of web development</p>
              </div>
            </div>
          </div>
          <div className='flex justify-center p-5  max-w-[400px]'>
            <div className='flex flex-col items-center bg-[#D8BFD8] rounded-lg drop-shadow-md'>
              <div className='w-[30%] p-2 mb-5 mt-5'>
                <img src={card2} className='border-2 rounded-lg p-2' />
              </div>
              <div className='flex flex-col items-center'>
                <h1 className='font-semibold text-xl underline decoration-2'>Code Snippet Library</h1>
                <p className='p-5 text-center text-[#484848]'>Access a vast collection of code snippets and examples to save time and effort during development. From basic HTML/CSS templates to complex JavaScript functions, find the code you need to kickstart your projects</p>
              </div>
            </div>
          </div>
          <div className='flex  justify-center p-5  max-w-[400px]'>
            <div className='flex flex-col items-center bg-[#D8BFD8] rounded-lg drop-shadow-md'>
              <div className='w-[30%] p-2 mb-5 mt-5'>
                <img src={card3} className='border-2 rounded-lg p-2' />
              </div>
              <div className='flex flex-col items-center'>
                <h1 className='font-semibold text-xl underline decoration-2'>Interactive Coding Challenges</h1>
                <p className='p-5 text-center text-[#484848]'>Sharpen your coding skills with interactive challenges and quizzes. Test your understanding of algorithms, data structures, and programming concepts. Track your progress and level up your coding prowess.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* feature card section ends */}

      {/* footer section starts */}

      <div>
        <hr />
        <div className='flex justify-center items-center m-5 font-bold '>
          © Web Resources Hub 2023
        </div>
      </div>
    </div>

  );
}
