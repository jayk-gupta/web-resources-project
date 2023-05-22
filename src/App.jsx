import React from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
// nav
import Nav from "./components/nav/Nav.jsx";
// components
import Websites from "./components/websites/Websites.jsx";
import Books from "./components/books/Books.jsx";
import Challenges from "./components/challenges/Challenges.jsx";
import Home from "./components/Home.jsx";
import Videos from "./components/videos/Videos.jsx";
import Tools from "./components/tools/Tools.jsx";

//-------------Videos-------------
import { HtmlV } from "./components/videos/HtmlV.jsx";
import { JavascriptV } from "./components/videos/JavascriptV.jsx";
import { CssV } from "./components/videos/CssV.jsx";
import { ReactV } from "./components/videos/ReactV.jsx";

//--------------Websites-----------
import { Htmlw } from "./components/websites/Htmlw.jsx";
import { Cssw } from "./components/websites/Cssw.jsx";
import { Javascriptw } from "./components/websites/Javascriptw.jsx";
import { Reactw } from "./components/websites/Reactw.jsx";

//-------------Books---------------
import { HtmlB } from "./components/books/HtmlB.jsx";
import { JavascriptB } from "./components/books/JavascriptB.jsx";
import { ReactB } from "./components/books/ReactB.jsx";
import { CssB } from "./components/books/CssB.jsx";

//-------------Challenges-----------
import { HtmlC } from "./components/challenges/HtmlC.jsx";
import { CssC } from "./components/challenges/CssC.jsx";
import { JavascriptC } from "./components/challenges/JavascriptC.jsx";
import { ReactC } from "./components/challenges/ReactC.jsx";

//-------------Tools------------------
import { Css } from "./components/tools/Css.jsx";
import { Html } from "./components/tools/Html.jsx";
import { Javascript } from "./components/tools/Javascript.jsx";
import { Reactt } from "./components/tools/Reactt.jsx";

const App = () => {
  return (
    <div className="flex">
      <Nav className=""></Nav>
      <Routes location={location} key = {location.key}>
        {/* Home */}
        <Route path="/" element={<Home />}></Route>

        {/***********  Videos ************************/}
        <Route path="/Videos" element={<Videos sectionName="Videos"/>}>
          <Route path="html" element={<HtmlV />}></Route>
          <Route path="css" element={<CssV />}></Route>
          <Route path="javascript" element={<JavascriptV />}></Route>
          <Route path="react" element={<ReactV />}></Route>
        </Route>

        {/************  Websites *************/}
        <Route path="/Websites" element={<Websites sectionName="Websites"/>}>
          {/* All Categories */}
          <Route path="html" element={<Htmlw />}></Route>
          <Route path="css" element={<Cssw />}></Route>
          <Route path="javascript" element={<Javascriptw />}></Route>
          <Route path="react" element={<Reactw />}></Route>
        </Route>
        {/*  Challenges*/}
        <Route path="/Challenges" element={<Challenges sectionName="Challenges"/>}>
          <Route path="html" element={<HtmlC />}></Route>
          <Route path="css" element={<CssC />}></Route>
          <Route path="javascript" element={<JavascriptC />}></Route>
          <Route path="react" element={<ReactC></ReactC>}></Route>
        </Route>
        {/* Books */}
        <Route path="/Books" element={<Books sectionName="Books"/>}>
          <Route path="html" element={<HtmlB />}></Route>
          <Route path="css" element={<CssB />}></Route>
          <Route path="javascript" element={<JavascriptB />}></Route>
          <Route path="react" element={<ReactB />}></Route>
        </Route>
        {/* Tools */}
        <Route path="/Tools" element={<Tools sectionName="Tools"/>}>
          <Route path="html" element={<Html />}></Route>
          <Route path="css" element={<Css />}></Route>
          <Route path="javascript" element={<Javascript />}></Route>
          <Route path="react" element={<Reactt />}></Route>
        </Route>
        </Routes>
    </div>
  );
};

export default App;

