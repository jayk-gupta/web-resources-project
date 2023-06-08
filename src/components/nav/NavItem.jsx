import React from "react";
import * as FaIcons from "react-icons/fa";
import * as BsIcons from "react-icons/bs";
import * as GiIcons from "react-icons/gi";
import * as RiIcons from "react-icons/ri";
import NavUI from "./NavUI.jsx";

const icons = [
  {
    icon: <FaIcons.FaHome />,
    iconName: "Home",
    link: "/",
  },
  {
    icon: <BsIcons.BsFillCameraVideoFill />,
    iconName: "Videos",
    link: "/Videos",
  },
  {
    icon: <BsIcons.BsGlobe2 />,
    iconName: "Websites",
    link: "/Websites",
  },
  {
    icon: <GiIcons.GiBookshelf />,
    iconName: "Books",
    link: "/Books",
  },
  {
    icon: <BsIcons.BsTools />,
    iconName: "Tools",
    link: "/Tools",
  },
];

function NavItem() {
  const item = icons.map((item, index) => (
    <NavUI key={index} icon={item.icon} iconName={item.iconName} />
  ));
  return item;
}

export default NavItem;
