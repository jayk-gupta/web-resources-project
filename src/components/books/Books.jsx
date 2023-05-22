import React from "react";
import TagsNav from "../nav/TagsNav.jsx";
import {Outlet} from "react-router-dom";
import Welcome from "../Welcome.jsx";
export default function Books({sectionName}) {
  return (
    <div className="border-l-2 border-[#ffdd77]  flex flex-col w-screen  h-screen gap-6">
      {/* BUTTON */}
      <TagsNav />
      <Welcome section={sectionName}/>
      <Outlet></Outlet>
    </div>
  );
}
