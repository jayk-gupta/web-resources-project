import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import SideNav from "./components/nav/SideNav.jsx";
import ScrollToTopButton from "./components/ScrollToTopButton.jsx";

const Home = lazy(() => import("./components/Home.jsx"));
const QuizPage = lazy(() => import("./components/QuizPage.jsx"));
const Books = lazy(() => import("./components/books/Index.jsx"));
const Tools = lazy(() => import("./components/tools/Index.jsx"));
const Videos = lazy(() => import("./components/videos/Index.jsx"));
const Editors = lazy(() => import("./components/editor/Index.jsx"));
const Websites = lazy(() => import("./components/websites/Index.jsx"));
const Challenges = lazy(() => import("./components/challenges/Index.jsx"));

// A wrapper component for content pages that need padding offset
const ContentWrapper = ({ children }) => (
  // Apply padding only to content pages (lg:pl-60 accounts for the sidebar width)
  <div className="lg:pl-60 w-full">
    {children}
  </div>
);

const App = () => {
  return (
    // Root container with global dark background
    <div className="flex min-h-screen bg-gray-950">
      
      {/* Sidebar (Fixed position) */}
      <SideNav />
      
      {/* Main Content Area (Takes remaining space) */}
      <div className="flex-1 w-full"> 
        <Routes>
          
          {/* 1. Full Screen Routes (Home and Quiz) */}
          <Route path="/" element={
            <Suspense fallback={<p className="text-white pt-20 pl-20">Loading...</p>}>
              <Home />
            </Suspense>
          } />
          
          <Route path="/quiz" element={
            <Suspense fallback={<p className="text-white pt-20 pl-20">Loading...</p>}>
              <QuizPage />
            </Suspense>
          } />

          {/* 🎯 NEW: Alias /resources to the Challenges page as a starting point */}
          <Route path="/resources" element={
            <Suspense fallback={<p className="text-white pt-20 pl-20">Loading...</p>}>
              <ContentWrapper><Challenges /></ContentWrapper>
            </Suspense>
          } />
          
          {/* 3. Content Routes: USE ContentWrapper for padding/offset */}
          <Route path="/Videos" element={
            <Suspense fallback={<p className="text-white pt-20 pl-20">Loading...</p>}>
              <ContentWrapper><Videos /></ContentWrapper>
            </Suspense>
          } />
          <Route path="/Websites" element={
            <Suspense fallback={<p className="text-white pt-20 pl-20">Loading...</p>}>
              <ContentWrapper><Websites /></ContentWrapper>
            </Suspense>
          } />
          <Route path="/Challenges" element={
            <Suspense fallback={<p className="text-white pt-20 pl-20">Loading...</p>}>
              <ContentWrapper><Challenges /></ContentWrapper>
            </Suspense>
          } />
          <Route path="/Books" element={
            <Suspense fallback={<p className="text-white pt-20 pl-20">Loading...</p>}>
              <ContentWrapper><Books /></ContentWrapper>
            </Suspense>
          } />
          <Route path="/Tools" element={
            <Suspense fallback={<p className="text-white pt-20 pl-20">Loading...</p>}>
              <ContentWrapper><Tools /></ContentWrapper>
            </Suspense>
          } />
          <Route path="/Editors" element={
            <Suspense fallback={<p className="text-white pt-20 pl-20">Loading...</p>}>
              <ContentWrapper><Editors /></ContentWrapper>
            </Suspense>
          } />
        </Routes>
      </div>
      <ScrollToTopButton />
    </div>
  );
};

export default App;
