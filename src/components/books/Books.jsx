import {useEffect} from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import TagsNav from "../nav/TagsNav.jsx";
import Welcome from "../Welcome.jsx";

export default function Books({sectionName}) {
  const {pathname} = useLocation();
	const navigate = useNavigate();
	
	useEffect(() => {
		let lastRoute = pathname.split("/").pop();
		if (lastRoute === "Books") {
			navigate(`${pathname}/html`);
		}
	}, [pathname]);
  return (
    <div className="border-l-2 border-[#ffdd77]  flex flex-col w-screen  h-screen gap-6">
      {/* BUTTON */}
      <TagsNav />
      <Welcome section={sectionName}/>
      <Outlet></Outlet>
    </div>
  );
}
