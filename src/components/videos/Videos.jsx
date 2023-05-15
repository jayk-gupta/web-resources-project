import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import TagsNav from "../nav/TagsNav.jsx";
import { motion } from "framer-motion";

export default function Videos() {
  return (
    <div
      className="border-l-2 border-[#ffdd77]   flex flex-col w-screen  gap-6 
   h-screen"
    >
      <TagsNav />
      <div className="mx-auto text-center">
        <h2 className="text-4xl font-merriweather tracking-wider mb-2">
          Welcome to videos section!
        </h2>
        <p className="font-roboto tracking-wider">
          Select a tag to view videos
        </p>
        {/* <button className="bg-[#ffd67d] text-lg rounded-full w-32">
          Load more
        </button> */}
      </div>
      <Outlet></Outlet>

      {/* BUTTON */}
    </div>
  );
}

