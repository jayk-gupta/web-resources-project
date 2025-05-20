import { NavLink } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Sidebar = () => {
  const { isDarkMode } = useTheme();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/videos', label: 'Videos' },
    { path: '/websites', label: 'Websites' },
    { path: '/challenges', label: 'Challenges' },
    { path: '/books', label: 'Books' },
    { path: '/tools', label: 'Tools' },
    { path: '/editors', label: 'Editors' },
    { path: '/resources', label: 'Resources' },
  ];

  return (
    <aside className="w-64 h-screen bg-slate-500 dark:bg-gray-800 shadow-lg fixed left-0 top-0 z-50">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-black dark:text-white mb-8">
          Web Resources Hub
        </h1>
        
        <nav className="space-y-4">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-lg transition-all duration-200 ${
                  isActive
                    ? 'bg-stone-500 text-white shadow-md'
                    : 'text-black dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar; 