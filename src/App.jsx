import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Sidebar from './components/Sidebar';

// Lazy load components
const Home = lazy(() => import('./components/Home'));
const About = lazy(() => import('./components/About'));
const Videos = lazy(() => import('./components/videos/Index'));
const Websites = lazy(() => import('./components/websites/Index'));
const Challenges = lazy(() => import('./components/challenges/Index'));
const Books = lazy(() => import('./components/books/Index'));
const Tools = lazy(() => import('./components/tools/Index'));
const Editors = lazy(() => import('./components/editor/Index'));
const Resources = lazy(() => import('./components/Resources'));

function App() {
  return (
    <ThemeProvider>
      <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
        <Sidebar />
        <main className="flex-1 ml-64 relative">
          <Suspense fallback={
            <div className="flex items-center justify-center h-screen">
              <div className="text-2xl text-gray-600 dark:text-gray-300">Loading...</div>
            </div>
          }>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/videos" element={<Videos />} />
              <Route path="/websites" element={<Websites />} />
              <Route path="/challenges" element={<Challenges />} />
              <Route path="/books" element={<Books />} />
              <Route path="/tools" element={<Tools />} />
              <Route path="/editors" element={<Editors />} />
              <Route path="/resources" element={<Resources />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;