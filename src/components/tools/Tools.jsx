import React from "react";
import { Outlet } from "react-router-dom";
import TagsNav from "../nav/TagsNav";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Tools = () => {
  return (
    <div
      className="border-l-2 border-[#ffdd77]   flex flex-col w-screen  
   h-screen "
    >
      {/* <TagsNav /> */}

      <TagsNav />

      <div className="m-auto text-center pt-6">
        <h2 className="text-4xl font-merriweather tracking-wider mb-2">
          Welcome to Tools section!
        </h2>
        <p className="font-roboto tracking-wider">
          Select a tag to view tools
        </p>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default Tools;
