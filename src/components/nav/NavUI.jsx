import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import SubMenu from "./SubMenu.jsx";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const hoverStyle = "hover:text-white-50 cursor-pointer";

function NavUI(props) {
  const [display, setDisplay] = useState(false);

  const clickHandler = () => {
    setDisplay(!display);
  };

  return (
    <div className="flex flex-col">
      <NavLink to={props.link}>
      <div className="flex gap-6 text-xl items-center">
        <span className={hoverStyle}> {props.icon} </span>
        <p className={hoverStyle}>{props.iconName}</p>
        {/* <RiArrowDropDownLine
          className={`${hoverStyle} text-2xl`}
          onClick={clickHandler}
        /> */}
        </div>
        </NavLink>

      {/* {display && <SubMenu />} */}
    </div>
  );
}

export default NavUI;
