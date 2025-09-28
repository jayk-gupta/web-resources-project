import { useEffect, useState } from "react";
import Card from "../Card";
import Filter from "../filter/index";
import html from "../../database/books/html.json";
import css from "../../database/books/css.json";
import js from "../../database/books/javascript.json";
import react from "../../database/books/reactjs.json";
import tailwind from "../../database/books/tailwindcss.json";
import nextjs from "../../database/books/nextjs.json";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Index = () => {
  const [filter, setFilter] = useState("html");
  const [data, setData] = useState([]);
  const [searchData, setSearchData] = useState();
  let location = useLocation();

  useEffect(() => {
    if (filter === "html") {
      setData([...html]);
    } else if (filter === "css") {
      setData([...css]);
    } else if (filter === "js") {
      setData([...js]);
    } else if (filter === "tailwind") {
      setData([...tailwind]);
    } else if (filter === "nextjs") {
      setData([...nextjs]);
    } else {
      setData([...react]);
    }
  }, [filter]);

  const handleFilterChange = (target) => {
    setFilter(target);
  };

  const index = location.search.indexOf("=");
  let searchItem = location.search.slice(index + 1);

  useEffect(() => {
    const value = data.filter((item) => {
      return `${item.title.toLowerCase()}`.includes(searchItem.toLowerCase());
    });
    setSearchData(value);
  }, [searchItem, data]);

  return (
    // Adjusted top padding
    <div className="min-h-screen bg-gray-950 px-6 pt-10 pb-20 max-w-7xl mx-auto">
      
      {/* Game Title: Updated to use pixel font and removed glow/shadow */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="
          text-4xl md:text-5xl font-extrabold text-center
             font-pixel // Using the defined pixel font
          text-white 
          uppercase 
          tracking-wider
          
          // Removed red glow/shadow (drop-shadow-[0_0_15px_rgba(220,38,38,0.7)]) for pixel art style
          mb-8 // Reduced margin to bring it closer to the filter
        "
      >
        📚 KNOWLEDGE QUEST – BOOKS 
      </motion.h1>

      {/* Filter Navbar */}
      <Filter onStateChange={handleFilterChange} />

      {/* Cards Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
        {data.length > 0 ? (
          (location.search !== "" ? searchData : data).map((res, i) => (
            <motion.div
              key={res.title}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
            >
              <Card
                title={res.title}
                link={res.link}
                description={res.description}
                i={i}
                img={res.img}
              />
            </motion.div>
          ))
        ) : (
          // Text color adjusted for dark background
          <p className="text-center text-gray-400 col-span-full">⚠️ No Data Found.</p>
        )}
      </div>
    </div>
  );
};

export default Index;
