import { motion } from 'framer-motion';
import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

export default function Resources() {
  const [activeCategory, setActiveCategory] = useState('all');
  const { isDarkMode, toggleTheme } = useTheme();

  const categories = [
    { id: 'all', name: 'All Resources' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'database', name: 'Database' },
    { id: 'devops', name: 'DevOps' },
  ];

  const resources = [
    {
      id: 1,
      title: 'React Documentation',
      description: 'Official React documentation with comprehensive guides and API references.',
      category: 'frontend',
      link: 'https://reactjs.org/docs/getting-started.html',
    },
    {
      id: 2,
      title: 'Node.js Documentation',
      description: 'Complete Node.js documentation and guides for backend development.',
      category: 'backend',
      link: 'https://nodejs.org/en/docs/',
    },
    {
      id: 3,
      title: 'MongoDB University',
      description: 'Free courses and tutorials for MongoDB database development.',
      category: 'database',
      link: 'https://university.mongodb.com/',
    },
    {
      id: 4,
      title: 'Docker Documentation',
      description: 'Learn containerization with Docker through official documentation.',
      category: 'devops',
      link: 'https://docs.docker.com/',
    },
  ];

  const filteredResources = activeCategory === 'all'
    ? resources
    : resources.filter(resource => resource.category === activeCategory);

  return (
    <div className="w-full min-h-screen bg-white dark:bg-gray-900 p-8">
      {/* Dark mode toggle - fixed position */}
      <div className="fixed top-4 right-4 z-[9999]">
        <button
          onClick={toggleTheme}
          className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300 shadow-lg"
          aria-label="Toggle dark mode"
        >
          {isDarkMode ? (
            <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          ) : (
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          )}
        </button>
      </div>

      {/* Main content */}
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-4 py-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-4">
          {filteredResources.map((resource) => (
            <motion.div
              key={resource.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {resource.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {resource.description}
              </p>
              <a
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-300"
              >
                Learn More →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 