import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import SideNavMobile from "./SideNavMobile"; // The mobile sidebar component
import NavItem from "./NavItem"; // The list of navigation items
import { FaHome, FaLaptopCode, FaBars } from "react-icons/fa";
import { BsFillCameraVideoFill, BsTools, BsBookHalf, BsGlobe2 } from "react-icons/bs";
import { VscCode } from "react-icons/vsc"; 
import { BiBullseye, BiCodeAlt } from "react-icons/bi"; 

// Desktop Nav Icons (Re-creating the old Nav component here as the desktop view)
const DesktopNav = () => {
    // Assuming the icons defined in NavItem are the source of truth for the links
    const desktopIcons = [
        { icon: <FaHome />, navlink: "/" },
        { icon: <BsFillCameraVideoFill />, navlink: "/Videos" },
        { icon: <BsGlobe2 />, navlink: "/Websites" },
        { icon: <FaLaptopCode />, navlink: "/Challenges" },
        { icon: <BsTools />, navlink: "/Tools" },
        { icon: <VscCode />, navlink: "/Editors" },
        { icon: <BsBookHalf />, navlink: "/Books" },
    ];

    const NavItemIconOnly = ({ to, icon, label }) => (
        <NavLink to={to} className={({ isActive }) => 
            `p-2 rounded-lg transition-colors duration-200 
             ${isActive ? 'bg-red-700 text-white shadow-md shadow-red-900/70' : 'text-gray-400 hover:bg-gray-800 hover:text-red-500'}`
        }>
          <div className="group flex flex-col gap-1 justify-center items-center">
            <div className="text-xl duration-200">
              {icon}
            </div>
            {/* Optional label display for desktop sidebar if desired */}
            {/* <h6 className="text-xs">{label}</h6> */}
          </div>
        </NavLink>
    );

    return (
        // Desktop Sidebar (Shown on screen size lg and up)
        <div className="hidden lg:flex flex-col h-screen w-20 py-4 px-2 items-center gap-10 bg-gray-900 shadow-xl shadow-black/50 fixed left-0 top-0 z-40">
            {/* Logo */}
            <NavLink to="/">
                <img
                    className="w-10 h-10 mt-2"
                    src="https://user-images.githubusercontent.com/100681165/238192169-5ed8ffdb-c8fb-4a69-8f91-d4d376271ae3.png"
                    alt="logo"
                />
            </NavLink>

            {/* Menu Items */}
            <div className="flex flex-col gap-4 w-full items-center">
                {desktopIcons.map((item, index) => (
                    <NavItemIconOnly key={index} to={item.navlink} icon={item.icon} />
                ))}
            </div>
        </div>
    );
};


// Main Component
const SideNav = () => {
    const [showSideNav, setShowSideNav] = useState(false);

    return (
        <>
            {/* Desktop Navigation (Static) */}
            <DesktopNav />

            {/* Mobile Menu Icon (Shown only on small screens) */}
            <div className="fixed top-4 left-4 z-50 lg:hidden">
                <button
                    onClick={() => setShowSideNav(true)}
                    className="p-3 bg-gray-950 text-red-500 rounded-full shadow-lg shadow-black/70 border border-red-700 hover:bg-red-900 transition-colors duration-200"
                >
                    <FaBars className="text-xl" />
                </button>
            </div>

            {/* Mobile Navigation (Conditional rendering) */}
            {showSideNav && (
                <>
                    {/* Overlay for closing */}
                    <div 
                        className="fixed inset-0 bg-black opacity-70 z-40 lg:hidden" 
                        onClick={() => setShowSideNav(false)} 
                    />
                    <SideNavMobile setShowSideNav={setShowSideNav} />
                </>
            )}
        </>
    );
};

export default SideNav;
