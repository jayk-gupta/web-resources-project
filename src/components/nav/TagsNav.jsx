import React from 'react'
import { NavLink} from "react-router-dom";
import "./TagsNav.css";
const TagsNav = () => {
  return (
    <nav className="categories text-lg py-2 bg-[#f3d9fa] flex  gap-12 text-[#562c35] px-28 sticky top-0">
      <h2 className="text-xl font-merriweather tracking-wider mr-12">
        Web Dev Resources
      </h2>
      <NavLink
        to="html"
        className="tracking-wider hover:cursor-pointer hover:text-[#d63afd] "
      >
        HTML
      </NavLink>
      <NavLink
        to="css"
        className="tracking-wider hover:cursor-pointer hover:text-[#d63afd] "
      >
        CSS
      </NavLink>
      <NavLink
        to="javascript"
        className="tracking-wider hover:cursor-pointer hover:text-[#d63afd] "
      >
        Javascript
      </NavLink>
      <NavLink
        to="React"
        className="tracking-wider hover:cursor-pointer hover:text-[#d63afd] "
      >
        React
      </NavLink>
    </nav>
  );
}

export default TagsNav;