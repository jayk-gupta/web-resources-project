import React from "react";
import { FaHome } from "react-icons/fa";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { FaLaptopCode } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { NavLink } from "react-router-dom";
import { BsTools } from "react-icons/bs";

const Nav = () => {
  return (
    <div className="flex flex-col fixed h-screen bg-[#76118f] py-8 px-4 text-xl w-[5%] items-center gap-36 z-50 ">
      <NavLink to="/">
        <img className="s" src="../src/assets/logo.png" alt="logo" />
      </NavLink>

      <div className="flex flex-col gap-12 ">
        <NavLink to="/">
          <FaHome className="text-[white]  hover:text-grape-100" />
        </NavLink>
        <NavLink to="/Videos">
          <BsFillCameraVideoFill className="text-[white] hover:text-grape-100" />
        </NavLink>
        <NavLink to="/Websites">
          <CgWebsite className="text-[white] hover:text-grape-100" />
        </NavLink>
        <NavLink to="/Challenges">
          <FaLaptopCode className="text-[white] hover:text-grape-100" />
        </NavLink>
        <NavLink to="/Tools">
          <BsTools className="text-[white] hover:text-grape-100" />
        </NavLink>
      </div>
    </div>
  );
};

export default Nav;
