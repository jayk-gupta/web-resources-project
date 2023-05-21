import React from "react";
import TagsNav from "../nav/TagsNav.jsx";
import {Outlet, useOutlet } from "react-router-dom";
import Welcome from "../Welcome.jsx";
export default function Books({sectionName}) {
  const outletRendered = useOutlet();
  return (
    <div className="border-l-2 border-[#ffdd77]  flex flex-col w-screen  h-screen">
      {/* BUTTON */}
      <TagsNav />
      <Welcome section={sectionName} isOutletRendered={outletRendered} />
      <Outlet></Outlet>
    </div>
  );
}
