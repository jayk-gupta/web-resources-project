import React, { useState } from "react";
import NavItem from "./NavItem";
import { AiOutlineSearch } from "react-icons/ai";
import SideNavMobile from "./SideNavMobile";

function SideNav() {
  const [showSideNav, setShowSideNav] = useState(false);
  const [searchResult,setSearchResult] = useState("");
  let debounceTimer;


  const clickHandler = () => {
    setShowSideNav(!showSideNav);
  };

  const handleInputChange = (event) => {
    setSearchResult(event.target.value);
    // Perform any other actions here, if needed
  };

  // Debounce function
  const debounce = (func, delay) => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(func, delay);
  };  

  return (
    <>
      <div
        className=" flex flex-col fixed h-full py-2 px-4 text-lg w-52  gap-20 bg-gradient-to-b from-[#3f454a] to-[#1a1d20]
      text-[#cacaca] hidden lg:block "
      >
        <div className="search flex items-center gap-4 bg-[#2E2D2D] rounded-2xl px-2 py-[4px] mt-12">
          <AiOutlineSearch />
          <input
          onChange={(e)=>debounce(() => handleInputChange(e), 1500)}
            style={{ background: "transparent", outline: "none",width:"100%" }}
            placeholder="search..."
          ></input>
        </div>

        {/* nav */}
        <div className="flex flex-col p-2 mt-24  gap-6 ">
          <NavItem searchResult={searchResult}/>
        </div>
      </div>

      {!showSideNav ? (
        <div className="absolute z-10 block lg:hidden h-fit  p-[8px] py-[1px] cursor-pointer rounded-xl ml-4 mt-4 bg-[#242B2E]" >
          <i
            onClick={clickHandler}
            className="fa-solid fa-bars p-4 text-2xl text-[#fff]"
          ></i>
        </div>
      ) : (
        <SideNavMobile setShowSideNav={() => setShowSideNav(!showSideNav)} />
      )}
    </>
  );
}

export default SideNav;
