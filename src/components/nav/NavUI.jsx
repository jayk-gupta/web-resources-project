import React from "react";
import { NavLink } from "react-router-dom";

function NavUI(props) {
    // Note: The logic for navigating with search parameters is now primarily handled in NavItem,
    // as it maps the results. This component just renders the link.
    
    // The search parameter logic from the previous version of NavUI was inefficient and has been removed.

    return (
        <div className="flex flex-col">
            <NavLink to={props.navlink}>
                <div
                    className={`
                        flex gap-4 text-lg mt-5 items-center rounded-xl px-3 py-2 
                        transition-all duration-300 cursor-pointer 
                        // 1. Updated hover effects to use the RED accent
                        hover:scale-105 hover:text-red-500 hover:shadow-[0_0_15px_rgba(220,38,38,0.7)] 
                        ${props.activeTab}
                    `}
                >
                    <span className="text-xl text-gray-300 hover:text-red-500 transition-colors duration-300">{props.icon}</span>
                    <p className="pl-2 text-gray-300 hover:text-red-500 transition-colors duration-300">{props.iconName}</p>
                </div>
            </NavLink>
        </div>
    );
}

export default NavUI;
