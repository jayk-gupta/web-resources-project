import React from "react";
import * as FaIcons from "react-icons/fa";
import * as BsIcons from "react-icons/bs";
import * as GiIcons from "react-icons/gi";
import * as BiIcons from "react-icons/bi";
import NavUI from "./NavUI";
import { useLocation, useNavigate } from "react-router-dom";

const icons = [
    { icon: <FaIcons.FaHome />, iconName: "Home", navlink: "/" },
    { icon: <BsIcons.BsFillCameraVideoFill />, iconName: "Videos", navlink: "/Videos" },
    { icon: <BsIcons.BsGlobe2 />, iconName: "Websites", navlink: "/Websites" },
    { icon: <GiIcons.GiBookshelf />, iconName: "Books", navlink: "/Books" },
    { icon: <BsIcons.BsTools />, iconName: "Tools", navlink: "/Tools" },
    { icon: <BiIcons.BiBullseye />, iconName: "Challenges", navlink: "/Challenges" },
    { icon: <BiIcons.BiCodeAlt />, iconName: "Editors", navlink: "/Editors" },
];

function NavItem({ searchResult }) {
    let location = useLocation();
    const navigate = useNavigate();

    // Use a modified icons list to include search parameters if a result is present
    const displayedIcons = icons.map(item => {
        let navlink = item.navlink;
        if (searchResult) {
            // Apply the search query to the navigation link
            navlink = `${item.navlink}?search=${encodeURIComponent(searchResult)}`;
        }
        return { ...item, navlink };
    });

    return (
        <div className="overflow-hidden h-screen">
            {displayedIcons.map((item, index) => (
                <NavUI
                    key={index}
                    icon={item.icon}
                    iconName={item.iconName}
                    navlink={item.navlink}
                    // Updated activeTab styling to use the Red Accent
                    activeTab={
                        location.pathname === item.navlink.split('?')[0] // Compare path without query string
                            ? "bg-red-700/50 shadow-[0_0_15px_rgba(220,38,38,0.9)]"
                            : ""
                    }
                />
            ))}
        </div>
    );
}

export default NavItem;
