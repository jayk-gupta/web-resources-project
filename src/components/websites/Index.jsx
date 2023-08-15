import { useState, useEffect } from "react";
import Card from "../Card";
import Filter from "../filter/index";
import html from "../../database/websites/html.json";
import css from "../../database/websites/css.json";
import js from "../../database/websites/javascript.json";
import react from "../../database/websites/reactjs.json";
import tailwind from "../../database/websites/tailwindcss.json";
import nextjs from '../../database/websites/nextjs.json';
import { useLocation } from "react-router-dom";

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
    } else if (filter === "react") {
      setData([...react]);
    } else if (filter === "tailwind") {
      setData([...tailwind]);
    } else if (filter === "nextjs") {
      setData([...nextjs]);
    }  else {
      setData([]); // Set empty array if no matching filter is found
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
  }, [searchItem,data]
  )

  return (
    <div className="m-8 mt-32 lg:mt-8">
      <Filter onStateChange={handleFilterChange} />
      <div className="flex flex-wrap gap-5">
        {data.length > 0 ? (
          (location.search !== "" ? searchData : data).map((res, i) => (
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
          <p>No data found.</p>
        )}
      </div>
    </div>
  );
};

export default Index;
