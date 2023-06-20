import React, { useState } from 'react';
import Card from '../Card';
import Filter from '../filter/index';
import websiteData from '../../database/websites.json';

const Index = () => {
  const [filter, setFilter] = useState('html');

  const handleFilterChange = (target) => {
    setFilter(target);
  };

  return (
    <div className="m-10">
      <Filter onStateChange={handleFilterChange} />
      <div className="flex flex-wrap gap-6 ml-3">
        {websiteData.map(
          (res, i) =>
            filter === res.tag && (
              <Card
                className
                key={i}
                title={res.title}
                link={res.link}
                description={res.description}
                i={i}
                img={res.img}
              />
            )
        )}
      </div>
    </div>
  );
};

export default Index;
