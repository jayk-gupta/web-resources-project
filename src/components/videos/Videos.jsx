import React from "react";
import { Link, Outlet } from "react-router-dom";
import TagsNav from "../nav/TagsNav.jsx";

export default function Videos() {
  return (
    <div
      className="border-l-2 border-[#ffdd77]   flex flex-col w-screen  
   h-screen "
    >
      <TagsNav />
      <div className=" m-auto text-center pt-6">
        <h2 className="text-4xl font-merriweather tracking-wider mb-2 ">
          Welcome to Videos section!
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
