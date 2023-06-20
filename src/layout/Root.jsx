import { Outlet } from "react-router-dom";
import SideNav from "../components/nav/SideNav";

const Root = () => {
  return (
    <>
      <div className="flex">
        <SideNav />
      </div>
      <div className="ml-40 pl-10">
        <Outlet />
      </div>
    </>
  );
};

export default Root;
