import { useState, useEffect } from "react";
import Card from "../Card";
import Filter from "../filter/index";
import html from "../../database/videos/html.json";
import css from "../../database/videos/css.json";
import js from "../../database/videos/javascript.json";
import react from "../../database/videos/reactjs.json";
import tailwind from "../../database/videos/tailwindcss.json";
import nextjs from "../../database/videos/nextjs.json";
import { useLocation } from "react-router-dom";

// Store all datasets in a lookup object
const datasets = {
  html,
  css,
  js,
  react,
  tailwind,
  nextjs,
};

const Index = () => {
  const [filter, setFilter] = useState("html");
  const [data, setData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  let location = useLocation();

  // Update data when filter changes
  useEffect(() => {
    setData([...datasets[filter]]);
  }, [filter]);

  const handleFilterChange = (target) => {
    setFilter(target);
  };

  // Extract search query (?search=...)
  const index = location.search.indexOf("=");
  let searchItem = location.search.slice(index + 1);

  // Filter results when search changes
  useEffect(() => {
    if (searchItem) {
      const value = data.filter((item) =>
        item.title.toLowerCase().includes(searchItem.toLowerCase())
      );
      setSearchData(value);
    } else {
      setSearchData(data);
    }
  }, [searchItem, data]);

  return (
    // 1. Apply deep black background to fill the page area
    <div className="min-h-screen bg-gray-950 p-8 pt-32 lg:pt-8 max-w-7xl mx-auto">

      {/* NEW: Title Section - CODE QUEST - PRACTICE EDITOR */}
      <header className="text-center mb-12">
        {/* Main Title Line */}
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-pixel leading-tight tracking-wider">
          {/* The gamepad icon is often a simple string or an actual SVG/Image */}
          <span className="text-red-500">🎮</span>VIDEOS
        </h1>
        
        {/* Sub Title Line */}
        <p className="text-white text-3xl sm:text-4xl md:text-5xl font-pixel leading-tight tracking-wider">
        
        </p>
      </header>

  
      {/* Filter Section (The NavBar) */}
      <Filter onStateChange={handleFilterChange} />

      {/* Cards Section */}
      <div className="flex flex-wrap gap-5 mt-6 justify-center lg:justify-start">
        {searchData.length > 0 ? (
          searchData.map((res, i) => (
            <Card
              key={res.title}
              title={res.title}
              link={res.link}
              description={res.description}
              i={i}
              img={res.img}
            />
          ))
        ) : (
          // 2. Update "No results found" color to the primary red accent
          <p className="w-full text-center text-lg text-red-500 mt-10 animate-pulse">
            ⚡ No results found ⚡
          </p>
        )}
      </div>
    </div>
  );
};

export default Index;