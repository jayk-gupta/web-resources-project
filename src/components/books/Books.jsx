import React from "react";

import TagsNav from "../nav/TagsNav.jsx";
import { Link, Outlet } from "react-router-dom";
export default function Books() {
  return (
    <div className="border-l-2 border-[#ffdd77]  h-[16rem]  flex flex-col w-screen  gap-6 ">
      {/* BUTTON */}
      <TagsNav />
      <div className="mx-auto text-center">
        <h2 className="text-4xl font-roboto tracking-wider mb-2">
          Welcome to Books section!
        </h2>
        <p className="font-roboto tracking-wider">

          Select a tag to view Books

        </p>
      </div>

      <Outlet></Outlet>
    </div>
  );
}
