import { useState, useEffect } from 'react';
import Card from '../Card';
import Filter from '../filter/index';
import html from '../../database/tools/html.json';
import css from '../../database/tools/css.json';
import js from '../../database/tools/javascript.json';
import react from '../../database/tools/reactjs.json';

const Index = () => {
  const [filter, setFilter] = useState('html');
  const [data, setData] = useState([]);

  useEffect(() => {
    if (filter === 'html') {
      setData([...html]);
    } else if (filter === 'css') {
      setData([...css]);
    } else if (filter === 'js') {
      setData([...js]);
    } else {
      setData([...react]);
    }
  }, [filter]);

  const handleFilterChange = (target) => {
    setFilter(target);
  };

  return (
    <div className='m-10'>
       <div className="absolute top-10 left-12 mx-10 w-full z-5 flex justify-center">
        <Filter onStateChange={handleFilterChange} />
      </div>
      <div className='flex flex-wrap gap-6 justify-around pt-24'>
        {data.length > 0 ? (
          data.map((res, i) => (
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
