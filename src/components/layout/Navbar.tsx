import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [navigationItems, setNavigationItems] = useState([]);

  useEffect(() => {
    // Fetch navigation items
    axios.get('/api/navigation-items').then((response) => {
      setNavigationItems(response.data.navigationItems);
    });
  }, []);

  return (
    <nav className="bg-white dark:bg-neutral-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl font-bold text-primary dark:text-primary-light">
              InnerNova
            </Link>
          </div>
          <div className="hidden md:flex space-x-4">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-neutral-600 dark:text-neutral-400 hover:text-primary dark:hover:text-primary-light transition-colors duration-300"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;