import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaLaptopCode } from "react-icons/fa";
import { BsFillCameraVideoFill, BsTools, BsBookHalf } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { VscCode } from "react-icons/vsc"; // better icon for Editors

const Nav = () => {
  return (
    <div className="flex flex-col h-screen bg-purple-200 py-2 px-4 text-xl w-[5%] items-center gap-20 z-50">
      {/* Logo */}
      <NavLink to="/">
        <img
          className="w-10 h-10"
          src="https://user-images.githubusercontent.com/100681165/238192169-5ed8ffdb-c8fb-4a69-8f91-d4d376271ae3.png"
          alt="logo"
        />
      </NavLink>

      {/* Menu Items */}
      <div className="flex flex-col gap-6 pt-2">
        <NavItem to="/" icon={<FaHome />} label="Home" />
        <NavItem to="/Videos" icon={<BsFillCameraVideoFill />} label="Videos" />
        <NavItem to="/Websites" icon={<CgWebsite />} label="Websites" />
        <NavItem to="/Challenges" icon={<FaLaptopCode />} label="Challenges" />
        <NavItem to="/Tools" icon={<BsTools />} label="Tools" />
        <NavItem to="/Editors" icon={<VscCode />} label="Editors" />
        <NavItem to="/Books" icon={<BsBookHalf />} label="Books" />
      </div>
    </div>
  );
};

// Small reusable component for each link
const NavItem = ({ to, icon, label }) => (
  <NavLink to={to}>
    <div className="group flex flex-col gap-3 justify-center items-center">
      <div className="text-white hover:text-purple-100 group-hover:scale-125 duration-200">
        {icon}
      </div>
      <h6 className="text-purple-100 text-xs opacity-0 group-hover:opacity-100 duration-200">
        {label}
      </h6>
    </div>
  </NavLink>
);

export default Nav;
