import React from "react";
import { Outlet } from "react-router-dom";
import TagsNav from "../nav/TagsNav";
const Tools = () => {
  return (
    <div className="border-l-2 border-[#ffdd77]  h-[16rem]  flex flex-col w-screen  gap-6 ">
      <TagsNav />
      <div className="mx-auto text-center">
        <h2 className="text-4xl font-roboto tracking-wider mb-2">
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
