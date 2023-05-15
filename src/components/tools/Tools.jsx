import React from "react";
import { Outlet } from "react-router-dom";
// import TagsNav from "../nav/TagsNav";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Tools = () => {
  return (
    <div
      className="border-l-2 border-[#ffdd77]   flex flex-col w-screen  
   h-screen "
    >
      {/* <TagsNav /> */}

      <nav className="categories text-lg py-2 bg-[#f3d9fa] flex  gap-12 text-[#562c35] px-28 sticky top-0">
        {/* <Link to="all-categories" className="hover:text-orange-500 font-roboto">
        <p className="tracking-wider hover:cursor-pointer hover">
          All Categories{" "}
        </p>
      </Link> */}
        <h2 className="text-xl font-merriweather tracking-wider mr-12">
          Web Dev Resources
        </h2>
        <Link to="html" className="hover:text-orange-500 font-roboto">
          <p className="tracking-wider hover:cursor-pointer hover:text-[#d63afd]">
            HTML
          </p>
        </Link>
        <Link to="css" className="hover:text-orange-500 font-roboto">
          <p className="tracking-wider hover:cursor-pointer hover:text-[#d63afd]">
            CSS
          </p>
        </Link>
      </nav>

      <div className="m-auto text-center pt-6">
        <h2 className="text-4xl font-merriweather tracking-wider mb-2">
          Welcome to Tools section!
        </h2>
        <p className="font-roboto tracking-wider">
          Select a tag to view videos
        </p>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default Tools;
