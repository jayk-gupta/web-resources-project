import {useEffect} from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import TagsNav from "../nav/TagsNav.jsx";
import Welcome from "../Welcome.jsx";

export default function Videos({sectionName}) {
  const {pathname} = useLocation();
	const navigate = useNavigate();
	
	useEffect(() => {
		let lastRoute = pathname.split("/").pop();
		if (lastRoute === "Videos") {
			navigate(`${pathname}/html`);
		}
	}, [pathname]);
  
  return (
    <div
    className="border-l-2 border-[#ffdd77]  h-[16rem]  flex flex-col w-screen  gap-6 "
    >
      <TagsNav />
      <Welcome section={sectionName}/>
      <Outlet key={pathname}></Outlet>
      {/* BUTTON */}
    </div>
  );
}
