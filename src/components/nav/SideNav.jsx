import React from "react";
import NavItem from "./NavItem.jsx";
import { AiOutlineSearch } from "react-icons/ai";

function SideNav() {

  return (
    <div
      className="flex flex-col fixed h-screen py-2 px-4 text-lg w-[15%]  gap-20 z-50  bg-gradient-to-b from-[#3f454a] to-[#1a1d20]
     text-[#cacaca] overflow-scroll"
    >
      <div className="search flex items-center gap-4 bg-[#2E2D2D] rounded-2xl px-2 py-[4px] mt-12">
        <AiOutlineSearch />
        <input placeholder="search..." className="bg-[#2E2D2D] w-11/12 white border-none" />
      </div>
      {/* nav */}
      <div className="flex flex-col p-2  gap-6 ">
        <NavItem />
      </div>
    </div>
  );
}

export default SideNav;
