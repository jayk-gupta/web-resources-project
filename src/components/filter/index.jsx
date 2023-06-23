import React, { useState } from 'react';

const index = ({onStateChange}) => {
  const [filter, setFilter] = useState('html');

  const handleFilterChange = (target) => {
    setFilter(target);
    onStateChange(target)
  };

  return (
    <div className="flex space-x-6 content-center justify-center mb-10">
      <p
        className={`px-3 py-1 rounded-xl cursor-pointer  tracking-wider border-[#865E9C] ${filter === "html" ? 'border-[3px]':''}`}
        onClick={() => handleFilterChange('html')}
      >
        HTML
      </p>
      <p
        className={`px-3 py-1 rounded-xl cursor-pointer tracking-wider border-[#865E9C] ${filter === "css" ? 'border-[3px]':''}`}
        onClick={() => handleFilterChange('css')}
      >
        CSS
      </p>
      <p
        className={`px-3 py-1 rounded-xl cursor-pointer tracking-wider border-[#865E9C] ${filter === "js" ? 'border-[3px]':''}`}
        onClick={() => handleFilterChange('js')}
      >
        Javascript
      </p>
      <p
        className={`px-3 py-1 rounded-xl cursor-pointer tracking-wider border-[#865E9C] ${filter === "react" ? 'border-[3px]':''}`}
        onClick={() => handleFilterChange('react')}
      >
        ReactJS
      </p>
    </div>
  );
};

export default index;
