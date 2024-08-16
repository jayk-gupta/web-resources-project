import { useEffect, useState } from 'react';
import Card from '../Card';
import Filter from '../filter/index';
import html from '../../database/challenges/html.json';
import css from '../../database/challenges/css.json';
import js from '../../database/challenges/javascript.json';
import react from '../../database/challenges/reactjs.json';
import tailwind from '../../database/challenges/tailwindcss.json';
import nextjs from '../../database/challenges/nextjs.json';
import { useLocation } from "react-router-dom";

import { CardContainer, CardBody, CardItem } from "../Card3d";
import { FaChevronRight } from "react-icons/fa";


const Index = () => {
  const [filter, setFilter] = useState('html');
  const [data, setData] = useState([]);
  const [searchData, setSearchData] = useState();
  let location = useLocation();


  useEffect(() => {
    if (filter === 'html') {
      setData([...html]);
    } else if (filter === 'css') {
      setData([...css]);
    } else if (filter === 'js') {
      setData([...js]);
    } else if (filter === 'tailwind') {
      setData([...tailwind]);
    }else if (filter === 'nextjs') {
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
    <div className='m-8 mt-32 lg:mt-8'>
      <Filter onStateChange={handleFilterChange} />
      <div className='flex flex-wrap gap-5'>
        {data.length > 0 ? (
          (location.search !== "" ? searchData : data).map(
            (res, i) =>
              filter === res.tag && (
                <>
              <a className="group"
                  href={res.link}
              >
							<CardContainer
								key={res.title}
								containerClassName="custom-container-class"
								className="custom-class group shadow-3xl rounded border p-2"
							>
								<CardBody className="custom-body-class">
                  <CardItem className="text-xl mb-3 font-bold line-clamp-1" translateZ="10">
										{res.title}
                  </CardItem>
									<CardItem className="rounded w-full aspect-video my-2" translateZ="25">
										<img className="w-full aspect-video object-cover" src={res.img} alt={res.title} />
									</CardItem>
                  <CardItem className="justify-center mx-2 line-clamp-3" translateZ="5">
										{res.description}
                  </CardItem>
                  <CardItem className="inline-flex bg-grape-200 text-white transtition-color ease-out duration-500 group-hover:bg-grape-50/50 group-hover:text-grape-300 rounded px-2 items-center m-2 p-1" translateZ="10" >

										Read More{" "}
										<FaChevronRight className="transition-transform ease-out duration-500 group-hover:translate-x-1" />
                  </CardItem>
								</CardBody>
							</CardContainer>
              </a>
              </>

              )
          )
        ) : (
          <p>No data found.</p>
        )}
      </div>
    </div>
  );
};

export default Index;
