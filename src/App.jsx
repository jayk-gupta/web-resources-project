import React,{lazy, Suspense} from "react";
import { Route, Routes, NavLink } from "react-router-dom";
import Nav from './components/nav/Nav.jsx';
// import SideNav from "./components/nav/Nav.jsx";

const Home = lazy(() => import("./components/Home.jsx"));
const Books = lazy(() => import("./components/books/Index.jsx"));
const Tools = lazy(() => import("./components/tools/Index.jsx"));
const Videos = lazy(() => import("./components/videos/Index.jsx"));
const Websites = lazy(() => import("./components/websites/Index.jsx"));
const Challenges = lazy(() => import("./components/challenges/Index.jsx"));

const App = () => {
  return (
    <div className="flex">
      <Nav className="" />
      <div className="pl-60">
        <Routes location={location} key={location.key}>
          {/* Home */}
          <Route path="/" element={
            <Suspense fallback={<p>Loading</p>}>
              <Home />
            </Suspense>
          } />
          <Route path="/Videos" element={
            <Suspense fallback={<p>Loading</p>}>
              <Videos />
            </Suspense>
          } />
          <Route path="/Websites" element={
            <Suspense fallback={<p>Loading</p>}>
              <Websites />
            </Suspense>
          } />
          <Route path="/Challenges" element={
            <Suspense fallback={<p>Loading</p>}>
              <Challenges />
            </Suspense>
          } />
          <Route path="/Books" element={
            <Suspense fallback={<p>Loading</p>}>
              <Books />
            </Suspense>
          } />
          <Route path="/Tools" element={
            <Suspense fallback={<p>Loading</p>}>
              <Tools />
            </Suspense>
          } />
        </Routes>
      </div>
    </div>
  );
};

export default App;