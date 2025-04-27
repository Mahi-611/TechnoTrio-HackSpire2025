import { useEffect, useState } from 'react';
import axios from 'axios';
import { Heart, Instagram, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [quickLinks, setQuickLinks] = useState([]);
  const [supportInfo, setSupportInfo] = useState({ message: '', contactLink: '' });

  useEffect(() => {
    // Fetch quick links
    axios.get('/api/quick-links').then((response) => {
      setQuickLinks(response.data.quickLinks);
    });

    // Fetch support information
    axios.get('/api/support').then((response) => {
      setSupportInfo(response.data.supportInfo);
    });
  }, []);

  return (
    <footer className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-4">InnerNova</h3>
            <p className="text-neutral-600 dark:text-neutral-400 mb-4">
              A gentle space for your thoughts to rest, reflect, and rise.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 dark:text-neutral-400 hover:text-primary dark:hover:text-primary-light transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 dark:text-neutral-400 hover:text-primary dark:hover:text-primary-light transition-colors duration-300"
                aria-label="Discord"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-neutral-600 dark:text-neutral-400 hover:text-primary dark:hover:text-primary-light transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-4">Support</h3>
            <p className="text-neutral-600 dark:text-neutral-400 mb-4">
              {supportInfo.message}
            </p>
            <Link
              to={supportInfo.contactLink}
              className="inline-flex items-center text-primary dark:text-primary-light hover:underline"
            >
              Contact Us
            </Link>
          </div>
        </div>

        <div className="border-t border-neutral-200 dark:border-neutral-800 mt-8 pt-8 text-center text-neutral-600 dark:text-neutral-400">
          <p className="flex items-center justify-center">
            Made with <Heart size={16} className="mx-1 text-error" /> by InnerNova Team &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;