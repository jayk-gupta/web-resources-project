import { RouterProvider } from 'react-router-dom';
import router from './router/index.tsx';

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
