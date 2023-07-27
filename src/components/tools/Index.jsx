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
  const [searchTerm, setSearchTerm] = useState('');

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
    setSearchTerm(''); 
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = data.filter((item) => {
    return item.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className='m-8 mt-32 lg:mt-8'>
      <div className='mb-4 flex items-center'>
        <input
          type='text'
          placeholder='Search tools...'
          value={searchTerm}
          onChange={handleSearchChange}
          className='border border-gray-400 px-4 py-2 rounded-lg w-80' 
        />
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='16'
          height='16'
          fill='currentColor'
          viewBox='0 0 16 16'
          className='h-5 w-5 ml-2 text-gray-600 cursor-pointer'
          onClick={() => console.log('Search clicked')}
        >
          <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z' />
        </svg>
      </div>
      <Filter onStateChange={handleFilterChange} />
      <div className='flex flex-wrap gap-5'>
        {filteredData.length > 0 ? (
          filteredData.map((res, i) => (
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
