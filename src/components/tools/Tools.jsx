import React from "react";
import TagsNav from "../nav/TagsNav";
import { Outlet } from "react-router-dom";
import Welcome from "../Welcome.jsx";
const Tools = ({sectionName}) => {
  return (
    <div
    className="border-l-2 border-[#ffdd77]  h-[16rem]  flex flex-col w-screen  gap-6 "
    >
      {/* <TagsNav /> */}

      <TagsNav />
      <Welcome section={sectionName}/>
      <Outlet></Outlet>
    </div>
  );
};

export default Tools;
