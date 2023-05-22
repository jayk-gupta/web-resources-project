import React from "react";
import TagsNav from "../nav/TagsNav";
import { Outlet , useOutlet } from "react-router-dom";
import Welcome from "../Welcome.jsx";
export default function Challenges({sectionName}) {
  return (
    <div className="border-l-2 border-[#ffdd77]  h-[16rem]  flex flex-col w-screen  gap-6 ">
      {/* categories */}
      <TagsNav />
      <Welcome section={sectionName} />
      <Outlet></Outlet>
    </div>
  );
}

/*
background-image: linear-gradient(to right top, #fdc727, #fdc320, #febf18, #febb0e, #ffb700);
*/
