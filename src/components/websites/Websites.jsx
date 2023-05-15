import React from "react";
import { motion } from "framer-motion";
import TagsNav from "../nav/TagsNav.jsx";
import { Link, Outlet } from "react-router-dom";
export default function Websites() {

  return (
    <div
      className="border-l-2 border-[#ffdd77]   flex flex-col w-screen  
   h-screen "
    >
      {/* BUTTON */}
      <TagsNav />
      <div className="m-auto text-center pt-6">
        <h2 className="text-4xl font-merriweather tracking-wider mb-2">
          Welcome to Website section!
        </h2>
        <p className="font-roboto tracking-wider">
          Select a tag to view videos
        </p>
      </div>

      <Outlet></Outlet>
    </div>
  );
}
