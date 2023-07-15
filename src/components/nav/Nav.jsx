import React from "react";
import { NavLink } from "react-router-dom";
// import { GiSwordsEmblem } from "react-icons/gi";
import {LuSwords} from 'react-icons/lu'
import { FaBars, FaHome,FaTools } from "react-icons/fa";
import { ImBooks } from "react-icons/im";
import { BsCameraVideoFill} from "react-icons/bs"
import { useState } from "react";
import {CgWebsite} from 'react-icons/cg'
import { AnimatePresence, motion } from "framer-motion";
import './Nav.css';
const routes = [
  {
    path: "/",
    name: "Home",
    icon: <FaHome size={30} />,
  },
  {
    path: "/Videos",
    name: "Videos",
    icon: <BsCameraVideoFill size={30} />,
  },
  {
    path: "/Websites",
    name: "Websites",
    icon: <CgWebsite size={30} />,
  },
  {
    path: "/Challenges",
    name: "Challenges",
    icon: <LuSwords size={30} />,
  },
  {
    path: "/Books",
    name: "Books",
    icon: <ImBooks size={30} />,
  },
  {
    path: "/Tools",
    name: "Tools",
    icon: <FaTools size={30} />,
  },
];

const Nav = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <React.Fragment>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "240px" : "70px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                <img
                className="s"
                src="https://user-images.githubusercontent.com/100681165/238192169-5ed8ffdb-c8fb-4a69-8f91-d4d376271ae3.png"
                alt="logo"
                />
                  <h1>WebResourcesHub</h1>
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars">
              <FaBars size={30} onClick={toggle} />
            </div>
          </div>
          
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div id="ic" className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>

        <main>{children}</main>
      </div>
    </React.Fragment>
  );
};

export default Nav;