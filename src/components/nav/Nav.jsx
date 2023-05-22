import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { FaLaptopCode } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { NavLink } from "react-router-dom";
import { BsTools } from "react-icons/bs";
import { BsBookHalf } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import "./Nav.css";

const Nav = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (

    <div className="nav-container">


      <div className={`hamburger ${isSidebarOpen ? "open" : ""}`} onClick={toggleSidebar}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <div className="logo-container fixed p-4 z-50" style={{marginTop: "35px"}}>
        <NavLink to="/">
          <img
            className="s"
            src="https://user-images.githubusercontent.com/100681165/238192169-5ed8ffdb-c8fb-4a69-8f91-d4d376271ae3.png"
            alt="logo"
            style={{height:"50px", width: "50px"}}
          />
        </NavLink>
      </div>

      {isSidebarOpen && (
        <div className="sidebar">
          <div className="sidebar-options fixed h-screen bg-[#76118f] py-2 px-4 text-xl w-[5%] gap-20 items-center">
            <NavLink to="/">
              <div className="group flex flex-col gap-3 justify-center items-center" style={{ marginTop: '119px' }}>
                <FaHome className="icon hover:text-grape-100 group-hover:scale-125 duration-200" />
                <h6 className="text-grape-100 text-xs opacity-0 group-hover:opacity-100">
                  Home
                </h6>
              </div>
            </NavLink>
            <NavLink to="/Videos">
              <div className="group flex flex-col gap-3 justify-center items-center">
                <BsFillCameraVideoFill className="icon hover:text-grape-100 group-hover:scale-125 duration-200 mt-6" />
                <h6 className="text-grape-100 text-xs opacity-0 group-hover:opacity-100">
                  Videos
                </h6>
              </div>
            </NavLink>
            <NavLink to="/Websites">
              <div className="group flex flex-col gap-3 justify-center items-center">
                <CgWebsite className="icon hover:text-grape-100 group-hover:scale-125 duration-200 mt-6" />
                <h6 className="text-grape-100 text-xs opacity-0 group-hover:opacity-100">
                  Websites
                </h6>
              </div>
            </NavLink>
            <NavLink to="/Challenges">
              <div className="group flex flex-col gap-3 justify-center items-center">
                <FaLaptopCode className="icon hover:text-grape-100 group-hover:scale-125 duration-200 mt-6" />
                <h6 className="text-grape-100 text-xs opacity-0 group-hover:opacity-100">
                  Challenges
                </h6>
              </div>
            </NavLink>
            <NavLink to="/Tools">
              <div className="group flex flex-col gap-3 justify-center items-center">
                <BsTools className="icon hover:text-grape-100 group-hover:scale-125 duration-200 mt-6" />
                <h6 className="text-grape-100 text-xs opacity-0 group-hover:opacity-100">
                  Tools
                </h6>
              </div>
            </NavLink>
            <NavLink to="/Books">
              <div className="group flex flex-col gap-3 justify-center items-center">
                <BsBookHalf className="icon hover:text-grape-100 group-hover:scale-125 duration-200 mt-6" />
                <h6 className="text-grape-100 text-xs opacity-0 group-hover:opacity-100">
                  Books
                </h6>
              </div>
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default Nav;
