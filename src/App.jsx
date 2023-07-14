import React from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
import Nav from './components/nav/Nav.jsx';
import Home from './components/Home.jsx';
import Book from './components/books/Index.jsx';
import Tools from './components/tools/Index.jsx';
import Videos from './components/videos/Index.jsx';
import Websites from './components/websites/Index.jsx';
import Challenges from './components/challenges/Index.jsx';
import ScrollToTopButton from './components/ScrollToTopButton.jsx';

const App = () => {
  return (
    <div className='flex'>
      <Nav />
      <div className='mx-20'>
        <Routes location={location} key={location.key}>
          {/* Home */}
          <Route path='/' element={<Home />}></Route>
          <Route path='/Videos' element={<Videos />} />
          <Route path='/Websites' element={<Websites />} />
          <Route path='/Challenges' element={<Challenges />} />
          <Route path='/Books' element={<Book />} />
          <Route path='/Tools' element={<Tools />} />
        </Routes>
      </div>
      <ScrollToTopButton />
    </div>
  );
};

export default App;
