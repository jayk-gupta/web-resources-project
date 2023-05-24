import React, { useState } from 'react';

const index = ({onStateChange}) => {
  const [filter, setFilter] = useState('html');

  const handleFilterChange = (target) => {
    setFilter(target);
    onStateChange(target)
  };

  return (
    <div className="flex space-x-6 items-center mb-10">
      <p
        className={`px-3 py-1 rounded-xl cursor-pointer ${filter === "html" ? 'border':''}`}
        onClick={() => handleFilterChange('html')}
      >
        HTML
      </p>
      <p
        className={`px-3 py-1 rounded-xl cursor-pointer ${filter === "css" ? 'border':''}`}
        onClick={() => handleFilterChange('css')}
      >
        CSS
      </p>
      <p
        className={`px-3 py-1 rounded-xl cursor-pointer ${filter === "js" ? 'border':''}`}
        onClick={() => handleFilterChange('js')}
      >
        Javascript
      </p>
      <p
        className={`px-3 py-1 rounded-xl cursor-pointer ${filter === "react" ? 'border':''}`}
        onClick={() => handleFilterChange('react')}
      >
        ReactJS
      </p>
    </div>
  );
};

export default index;
