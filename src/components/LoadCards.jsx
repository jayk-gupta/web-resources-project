import Card from "./Card";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
export const LoadCards = () => {
  const [jsonData, setJsonData] = useState([]);
  const {pathname} = useLocation();
    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch(`/src/database${pathname}.json`);
        const data = await response.json();
        setJsonData(data);
      };

    fetchData();
  }, [pathname]);
  const cardComponents = jsonData.map((item, i) => (
    //  CARD
    <Card
      key={item.i}
      title={item.title}
      link={item.link}
      description={item.description}
      i={i}
      img={item.img}
    />
  ));
  return (
    <>
      <div className="grid grid-cols-3 gap-x-12 gap-y-16  px-36 my-12">
        {cardComponents}
      </div>
      <div className="p-4 w-full h-[20rem]"></div>
    </>
  );
};
