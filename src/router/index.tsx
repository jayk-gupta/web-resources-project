import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
// page imports
import Root from '../layout/Root';
import Home from '../components/Home';
import Videos from '../components/videos/Index';
import Websites from '../components/websites/Index';
import Challenges from '../components/challenges/index';
import Books from '../components/books/Index';
import Tools from '../components/tools/Index';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/Videos',
        element: <Videos />,
      },
      {
        path: '/Websites',
        element: <Websites />,
      },
      {
        path: '/Challenges',
        element: <Challenges />,
      },
      {
        path: '/Books',
        element: <Books />,
      },
      {
        path: '/Tools',
        element: <Tools />,
      },
    ],
  },
]);

export default router;
