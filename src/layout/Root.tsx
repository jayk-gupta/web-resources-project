import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../components/nav/Nav';

const Root = () => {
  return (
    <div className='flex'>
      <Nav />
      <div className='mx-20'>
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
