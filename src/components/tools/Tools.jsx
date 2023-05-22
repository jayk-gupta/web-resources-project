import {useEffect} from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import TagsNav from "../nav/TagsNav.jsx";
import Welcome from "../Welcome.jsx";

const Tools = ({sectionName}) => {
  const {pathname} = useLocation();
	const navigate = useNavigate();
	
	useEffect(() => {
		let lastRoute = pathname.split("/").pop();
		if (lastRoute === "Tools") {
			navigate(`${pathname}/html`);
		}
	}, [pathname]);
  return (
    <div
    className="border-l-2 border-[#ffdd77]  h-[16rem]  flex flex-col w-screen  gap-6 "
    >
      {/* <TagsNav /> */}

      <TagsNav />
      <Welcome section={sectionName}/>
      <Outlet></Outlet>
    </div>
  );
};

export default Tools;
