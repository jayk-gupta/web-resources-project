import React from "react";
import { motion } from "framer-motion";
import TagsNav from "../nav/TagsNav";
import { Outlet } from "react-router-dom";

export default function Challenges() {
  return (
    <div className="border-l-2 border-[#ffdd77]   flex flex-col w-screen h-screen">
      {/* categories */}
      <TagsNav />
      <div className="m-auto text-center pt-6">
        <h2 className="text-4xl font-merriweather tracking-wider mb-2">
          Welcome to Challenges section!
        </h2>
        <p className="font-roboto tracking-wider">
          Select a tag to view videos
        </p>
      </div>

      <Outlet></Outlet>
    </div>
  );
}

/*
background-image: linear-gradient(to right top, #fdc727, #fdc320, #febf18, #febb0e, #ffb700);
*/
