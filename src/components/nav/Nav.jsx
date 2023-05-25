import React from "react";
import { FaHome } from "react-icons/fa";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { FaLaptopCode } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { NavLink } from "react-router-dom";
import { BsTools } from "react-icons/bs";
import { BsBookHalf } from "react-icons/bs";

const Nav = () => {
  return (
    <div className="flex flex-col fixed h-screen bg-[#76118f] py-2 px-4 text-xl w-[5%] items-center gap-20 z-50 ">
      <NavLink to="/">
        <img
          className="s"
          src="https://user-images.githubusercontent.com/100681165/238192169-5ed8ffdb-c8fb-4a69-8f91-d4d376271ae3.png"
          alt="logo"
        />
      </NavLink>

      <div className="flex flex-col gap-6 pt-2">
        <NavLink to="/">
          <div className="group flex flex-col gap-3 justify-center items-center">
            <FaHome className="text-[white]  hover:text-grape-100 group-hover:scale-125 duration-200" />
            <h6 className="text-grape-100 text-xs opacity-0 group-hover:opacity-100 text-[white]">
              Home
            </h6>
          </div>
        </NavLink>
        <NavLink to="/Videos">
          <div className="group flex flex-col gap-3 justify-center items-center">
            <BsFillCameraVideoFill className="text-[white] hover:text-grape-100 group-hover:scale-125 duration-200" />
            <h6 className="text-grape-100 text-xs opacity-0 group-hover:opacity-100 text-[white]">
              Videos
            </h6>
          </div>
        </NavLink>
        <NavLink to="/Websites">
          <div className="group flex flex-col gap-3 justify-center items-center">
            <CgWebsite className="text-[white] hover:text-grape-100 group-hover:scale-125 duration-200" />
            <h6 className="text-grape-100 text-xs opacity-0 group-hover:opacity-100 text-[white]">
              Websites
            </h6>
          </div>
        </NavLink>
        <NavLink to="/Challenges">
          <div className="group flex flex-col gap-3 justify-center items-center">
            <FaLaptopCode className="text-[white] hover:text-grape-100 group-hover:scale-125 duration-200" />
            <h6 className="text-grape-100 text-xs opacity-0 group-hover:opacity-100 text-[white]">
              Challenges
            </h6>
          </div>
        </NavLink>
        <NavLink to="/Tools">
          <div className="group flex flex-col gap-3 justify-center items-center">
            <BsTools className="text-[white] hover:text-grape-100 group-hover:scale-125 duration-200" />
            <h6 className="text-grape-100 text-xs opacity-0 group-hover:opacity-100 text-[white]">
              Tools
            </h6>
          </div>
        </NavLink>
        <NavLink to="/Books">
          <div className="group flex flex-col gap-3 justify-center items-center">
            <BsBookHalf className="text-[white] hover:text-grape-100 group-hover:scale-125 duration-200" />
            <h6 className="text-grape-100 text-xs opacity-0 group-hover:opacity-100 text-[white]">
              Books
            </h6>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Nav;

