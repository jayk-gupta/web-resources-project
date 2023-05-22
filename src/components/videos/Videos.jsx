import React from "react";
import { Outlet } from "react-router-dom";
import TagsNav from "../nav/TagsNav.jsx";
import Welcome from "../Welcome.jsx";
export default function Videos({sectionName}) {
  return (
    <div
    className="border-l-2 border-[#ffdd77]  h-[16rem]  flex flex-col w-screen  gap-6 "
    >
      <TagsNav />
      <Welcome section={sectionName}/>
      <Outlet></Outlet>
      {/* BUTTON */}
    </div>
  );
}
