import React, { useState } from "react";
import NavItem from "./NavItem";
import { AiOutlineSearch } from "react-icons/ai";

const SideNavMobile = ({ setShowSideNav }) => {
    // State to hold the search text entered in the mobile sidebar
    const [searchText, setSearchText] = useState("");

    const clickHandler = () => {
        setShowSideNav(false); // Changed to explicitly set state to false
    };

    const handleSearchChange = (e) => {
        setSearchText(e.target.value);
    };

    return (
        <div
            className="fixed lg:hidden flex flex-col h-full w-60 py-4 px-5 gap-6 
            // Sidebar Theme: Deep black background, red accent shadow
            bg-gray-950 text-gray-300 z-50 
            shadow-[0_0_25px_rgba(220,38,38,0.7)]"
        >
            {/* Close Button */}
            <div className="flex justify-end">
                <i
                    onClick={clickHandler}
                    // Close Button Hover: Red accent
                    className="fa-solid fa-xmark text-3xl cursor-pointer hover:text-red-500 transition-colors duration-200"
                ></i>
            </div>

            {/* Search - Now Functional and Responsive */}
            <div 
                className="flex items-center gap-3 
                // Search Bar Styling: Darker box with red border/shadow
                bg-gray-800 rounded-lg px-3 py-2 border border-gray-700 shadow-inner shadow-black/50 hover:border-red-600 transition-colors duration-200"
            >
                {/* Search Icon: Red accent color */}
                <AiOutlineSearch className="text-red-500" />
                <input
                    className="bg-transparent outline-none w-full text-sm placeholder-gray-500 text-white"
                    placeholder="Search..."
                    value={searchText}
                    onChange={handleSearchChange}
                />
            </div>

            {/* Nav Items - Now passing search result */}
            <div className="flex flex-col p-2 gap-4 overflow-y-auto">
                {/* Pass the search text down to NavItem to modify the destination links */}
                <NavItem searchResult={searchText} />
            </div>
        </div>
    );
};

export default SideNavMobile;
