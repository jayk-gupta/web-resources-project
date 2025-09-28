import { useState, useEffect } from "react";
import Card from "../Card";
import Filter from "../filter/index";
import html from "../../database/websites/html.json";
import css from "../../database/websites/css.json";
import js from "../../database/websites/javascript.json";
import react from "../../database/websites/reactjs.json";
import tailwind from "../../database/websites/tailwindcss.json";
import nextjs from "../../database/websites/nextjs.json";
import { useLocation } from "react-router-dom";

// Lookup object for datasets
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
    setData(datasets[filter] ? [...datasets[filter]] : []);
  }, [filter]);

  const handleFilterChange = (target) => {
    setFilter(target);
  };

  // Extract query string (?search=...)
  const index = location.search.indexOf("=");
  let searchItem = location.search.slice(index + 1);

  // Apply search filter
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
    // 1. Set the deep black background and center container
    <div className="min-h-screen bg-gray-950 p-8 pt-32 lg:pt-8 max-w-7xl mx-auto">
      
      {/* NEW: Title Section - CODE QUEST - PRACTICE EDITOR */}
      <header className="text-center mb-12">
        {/* Main Title Line */}
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-pixel leading-tight tracking-wider">
          <span className="text-red-500">🎮</span>WEBSITES
        </h1>
        
        {/* Sub Title Line */}
        <p className="text-white text-3xl sm:text-4xl md:text-5xl font-pixel leading-tight tracking-wider">
          EDITOR
        </p>
      </header>

      {/* Filter Component */}
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
          <p className="w-full text-center text-lg text-[#ff6b6b] mt-10 animate-pulse">
            🚫 No websites found 🚫
          </p>
        )}
      </div>
    </div>
  );
};

export default Index;