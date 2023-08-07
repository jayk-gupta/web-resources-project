import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';


const hoverStyle = "hover:text-white cursor-pointer";

function NavUI(props) {
  const [display, setDisplay] = useState(false);
  const navigate = useNavigate();

  const clickHandler = () => {
    setDisplay(!display);
  };
  
  useEffect(()=>{
    navigate(`${props.activeTab}?search=${encodeURIComponent(props.searchResult)}`);
  },[props.searchResult])

  return (
    <div className="flex flex-col">
      <NavLink to={props.navlink}>
        <div className={`flex gap-4 text-lg mt-5  items-center ${props.activeTab}  p-2`}>
          <span className="hover:text-[#fff] cursor-pointer">{props.icon}</span>
          <div className="">
          <p className="hover:text-[#fff] cursor-pointer pl-2">{props.iconName}</p>
          </div>
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
