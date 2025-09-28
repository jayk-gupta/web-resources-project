import { useEffect, useState } from "react";
import Card from "../Card";
import Filter from "../filter/index";
import html from "../../database/challenges/html.json";
import css from "../../database/challenges/css.json";
import js from "../../database/challenges/javascript.json";
import react from "../../database/challenges/reactjs.json";
import tailwind from "../../database/challenges/tailwindcss.json";
import nextjs from "../../database/challenges/nextjs.json";
import { useLocation } from "react-router-dom";

// Store all datasets in a lookup object (Optional: This wasn't in your original, but is good practice)
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

  useEffect(() => {
    // Refactored to use the datasets lookup object for cleaner code
    setData([...datasets[filter]]);
  }, [filter]);

  const handleFilterChange = (target) => {
    setFilter(target);
  };

  const index = location.search.indexOf("=");
  let searchItem = location.search.slice(index + 1);

  useEffect(() => {
    const value = data.filter((item) =>
      `${item.title.toLowerCase()}`.includes(searchItem.toLowerCase())
    );
    setSearchData(value);
  }, [searchItem, data]);

  return (
    // 1. Set the main background to deep black
    <div className="relative min-h-screen px-6 py-10 mt-24 lg:mt-12 bg-gray-950">
      {/* Background is now the static black applied to the parent div. Removing the complex, animated inner background div: */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950 to-gray-900 animate-pulse opacity-90 -z-10"></div> */}

      {/* NEW: Title Section - CODE QUEST - PRACTICE EDITOR */}
      <header className="text-center mb-12 max-w-7xl mx-auto"> {/* Added max-w-7xl mx-auto for centering */}
        {/* Main Title Line */}
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-pixel leading-tight tracking-wider">
          {/* The gamepad icon is often a simple string or an actual SVG/Image */}
          <span className="text-red-500">🎮</span>CHALLENGES
        </h1>
        
        {/* Sub Title Line */}
        <p className="text-white text-3xl sm:text-4xl md:text-5xl font-pixel leading-tight tracking-wider">
          EDITOR
        </p>
      </header>

      {/* Filter navbar */}
      <Filter onStateChange={handleFilterChange} />

      {/* Game-style cards grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8 max-w-7xl mx-auto">
        {data.length > 0 ? (
          (location.search !== "" ? searchData : data).map(
            (res, i) =>
              filter === res.tag && (
                <Card
                  key={res.title}
                  title={res.title}
                  link={res.link}
                  description={res.description}
                  i={i}
                  img={res.img}
                    // 2. Apply red-themed hover/styling to the Card
                  className="transition-transform duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(220,38,38,0.7)] rounded-xl bg-gray-900 border border-gray-700 hover:border-red-600"
                />
              )
          )
        ) : (
          <p className="text-center text-gray-400 text-lg col-span-full">
            ⚠️ No challenges found.
          </p>
        )}
      </div>
    </div>
  );
};

export default Index;