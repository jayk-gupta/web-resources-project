import NavItem from "./NavItem";
import { AiOutlineSearch } from "react-icons/ai";

const SideNavMobile = ({setShowSideNav})=>{
    const clickHandler = ()=>{
        setShowSideNav()
    }
    return (
        <>
        <div>
        <div
      className=" flex flex-col fixed h-full  lg:hidden py-2 px-4 text-lg w-60  gap-5 bg-[#1a1d20] z-10 text-[#cacaca] "
  >
    <div className="flex w-48 justify-end">
    <i onClick={clickHandler} className="fa-solid fa-xmark text-3xl mt-2 cursor-pointer"></i>
    </div>
  
      <div className="search flex items-center gap-4 bg-[#2E2D2D] rounded-2xl px-2 py-[4px] mt-12">
        <AiOutlineSearch />
        <input
          style={{ background:'transparent',outline:'none',width:"100%"}}
          placeholder="search..."></input>
      </div>
      {/* nav */}
      <div className="flex flex-col p-2  gap-6 ">
        <NavItem />
      </div>
    </div>
        </div>
        </>
    )
}

export default SideNavMobile;