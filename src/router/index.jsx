import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root.jsx";
import Home from "../components/Home.jsx";
import Books from "../components/books/Index.jsx";
import Tools from "../components/tools/Index.jsx";
import Videos from "../components/videos/Index.jsx";
import Websites from "../components/websites/Index.jsx";
import Challenges from "../components/challenges/Index.jsx";

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
])

export default router;