import React from 'react'
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import TagsNav from "../nav/TagsNav.jsx";

const about = ({ sectionName }) => {
    return (
        <div
            className="border-l-2 border-[#ffdd77]  h-[16rem]  flex flex-col w-screen  gap-6 "
        >
            {/* BUTTON */}
            <TagsNav />
            <div className="mx-auto text-center">
                <h2 className="text-4xl font-roboto tracking-wider mb-2">
                    {`Welcome to ${sectionName} section!`}
                </h2>
            </div>
            <Outlet></Outlet>
            <div className='grid grid-cols-1 mx-auto w-[80vw] md:w-[50vw] rounded-xl text-lg bg-[#eebefa] border-b-[#2a1600] gap-x-12 gap-y-8 py-16 px-12 my-4 md:my-12'>

                <p className="mb-3 text-gray-500 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:mr-3 first-letter:float-left">Web Resource Hub is an open-source project developed for the DevJam Hackathon organized by Social Summer of Code. It serves as a comprehensive collection of frontend web resources, including HTML, CSS, JavaScript, and React. The project aims to provide developers with a centralized platform to access a wide range of frontend tools and resources, making their development process more efficient and productive.</p>
                <p className="text-gray-500 dark:text-gray-400">Web Resource Hub is a community-driven project, and we welcome contributions from all developers. If you have a resource that you think would be valuable to the community, please feel free to submit it.</p>
                <p className="text-gray-500 dark:text-gray-400"> We hope that Web Resource Hub will become a valuable resource for developers of all skill levels. Thank you for your support!</p>
            </div>


        </div>
    )
}

export default about
