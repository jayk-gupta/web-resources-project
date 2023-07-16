import React from "react";
import { NavLink } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useState } from "react";

const hoverStyle = "hover:text-white cursor-pointer";

function NavUI(props) {
  const [display, setDisplay] = useState(false);

  const clickHandler = () => {
    setDisplay(!display);
  };

  return (
    <div className="flex flex-col">
      <NavLink to={props.navlink}>
        <div className="flex gap-6 text-xl  items-center">
          <span className="hover:text-[#fff] cursor-pointer">{props.icon}</span>
          <p className="hover:text-[#fff] cursor-pointer pl-6">{props.iconName}</p>
          {/* <RiArrowDropDownLine
            className={`${hoverStyle} text-2xl`}
            onClick={clickHandler}
          /> */}
        </div>
      </NavLink>
    </div>
  );
}

export default NavUI;
