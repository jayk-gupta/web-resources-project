import React from "react";
import { Route, Routes } from "react-router-dom";
// nav
import Nav from "./components/nav/Nav.jsx";
// components
import Websites from "./components/websites/Websites.jsx";
import Books from "./components/books/Books.jsx";
import Challenges from "./components/challenges/Challenges.jsx";
import Home from "./components/Home.jsx";
import Videos from "./components/videos/Videos.jsx";
import Tools from "./components/tools/Tools.jsx";

import { LoadCards } from "./components/LoadCards.jsx";

const App = () => {
  return (
    <div className="flex">
      <Nav className=""></Nav>
      <Routes location={location} key = {location.key}>
        {/* Home */}
        <Route path="/" element={<Home />}></Route>

        {/***********  Videos ************************/}
        <Route path="/Videos" element={<Videos sectionName="Videos"/>}>
          <Route path="html" element={<LoadCards />}></Route>
          <Route path="css" element={<LoadCards />}></Route>
          <Route path="javascript" element={<LoadCards />}></Route>
          <Route path="react" element={<LoadCards />}></Route>
        </Route>

        {/************  Websites *************/}
        <Route path="/Websites" element={<Websites sectionName="Websites"/>}>
          {/* All Categories */}
          <Route path="html" element={<LoadCards />}></Route>
          <Route path="css" element={<LoadCards />}></Route>
          <Route path="javascript" element={<LoadCards />}></Route>
          <Route path="react" element={<LoadCards />}></Route>
        </Route>
        {/*  Challenges*/}
        <Route path="/Challenges" element={<Challenges sectionName="Challenges"/>}>
          <Route path="html" element={<LoadCards />}></Route>
          <Route path="css" element={<LoadCards />}></Route>
          <Route path="javascript" element={<LoadCards />}></Route>
          <Route path="react" element={<LoadCards/>}></Route>
        </Route>
        {/* Books */}
        <Route path="/Books" element={<Books sectionName="Books"/>}>
          <Route path="html" element={<LoadCards />}></Route>
          <Route path="css" element={<LoadCards />}></Route>
          <Route path="javascript" element={<LoadCards />}></Route>
          <Route path="react" element={<LoadCards />}></Route>
        </Route>
        {/* Tools */}
        <Route path="/Tools" element={<Tools sectionName="Tools"/>}>
          <Route path="html" element={<LoadCards />}></Route>
          <Route path="css" element={<LoadCards />}></Route>
          <Route path="javascript" element={<LoadCards />}></Route>
          <Route path="react" element={<LoadCards />}></Route>
        </Route>
        </Routes>
    </div>
  );
};

export default App;

