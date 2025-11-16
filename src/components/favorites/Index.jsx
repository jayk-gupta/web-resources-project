import React, { useEffect, useState } from "react";
import Card from "../Card";

const Index = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    try {
      const favs = JSON.parse(localStorage.getItem("favorites") || "[]");
      setData(favs);
    } catch (e) {
      setData([]);
    }
  }, []);

  return (
    <div className="m-8 mt-32 lg:mt-8">
      <h1 className="text-2xl font-bold mb-4">Favorites</h1>
      <div className="flex flex-wrap gap-5">
        {data && data.length > 0 ? (
          data.map((res, i) => (
            <Card
              key={res.title + i}
              title={res.title}
              link={res.link}
              description={res.description}
              i={i}
              img={res.img}
            />
          ))
        ) : (
          <p>No favorites yet.</p>
        )}
      </div>
    </div>
  );
};

export default Index;
