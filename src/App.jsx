import React from 'react';
import { Route, Routes, NavLink, useLocation } from 'react-router-dom';
import Nav from './components/nav/Nav.jsx';
import Home from './components/Home.jsx';
import Book from './components/books/Index.jsx'
import Tools from './components/tools/Index.jsx';
import Videos from './components/videos/Index.jsx';
import Websites from './components/websites/Index.jsx';
import Challenges from './components/challenges/Index.jsx';
import { BsGithub } from "react-icons/bs";

const App = () => {
  const location = useLocation();

  return (
    <div className="flex">
      <Nav />
      <div className="mx-20">
        <Routes location={location} key={location.key}>
          {/* Home */}
          <Route path="/" element={<Home />} />
          <Route path="/Videos" element={<Videos />} />
          <Route path="/Websites" element={<Websites />} />
          <Route path="/Challenges" element={<Challenges />} />
          <Route path="/Books" element={<Book />} />
          <Route path="/Tools" element={<Tools />} />
        </Routes>
      </div>
    </div>
  );
};

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/Videos" activeClassName="active">
            Videos
          </NavLink>
        </li>
        <li>
          <NavLink to="/Websites" activeClassName="active">
            Websites
          </NavLink>
        </li>
        <li>
          <NavLink to="/Challenges" activeClassName="active">
            Challenges
          </NavLink>
        </li>
        <li>
          <NavLink to="/Books" activeClassName="active">
            Books
          </NavLink>
        </li>
        <li>
          <NavLink to="/Tools" activeClassName="active">
            Tools
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default App;
