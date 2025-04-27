import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MessageCircle, Heart, LineChart, Quote, ArrowRight } from 'lucide-react';
import { useThemeStore } from '../store/themeStore';
import axios from 'axios';

const Dashboard = () => {
  const { darkMode } = useThemeStore();
  const [greeting, setGreeting] = useState('');
  const [quote, setQuote] = useState({ text: '', author: '' });
  const [moodData, setMoodData] = useState([]);

  // Set greeting based on time of day
  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) {
      setGreeting('Good morning');
    } else if (hour < 18) {
      setGreeting('Good afternoon');
    } else {
      setGreeting('Good evening');
    }
  }, []);

  // Fetch dashboard data from the backend
  useEffect(() => {
    axios.get('/api/dashboard/dashboard-data').then((response) => {
      const { quotes, moodData } = response.data;
      setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
      setMoodData(moodData);
    });
  }, []);

  const cards = [
    {
      title: 'Chat with InnoBot',
      icon: <MessageCircle size={24} />,
      description: 'Talk to our AI companion about your day and feelings',
      cta: 'Start a conversation',
      color: 'bg-gradient-to-br from-indigo-500 to-purple-600',
      link: '/chat',
    },
    {
      title: 'Daily Affirmations',
      icon: <Heart size={24} />,
      description: 'Discover personalized affirmations for positive thinking',
      cta: "Get today's affirmation",
      color: 'bg-gradient-to-br from-rose-400 to-pink-500',
      link: '/affirmations',
    },
    {
      title: 'Your Progress',
      icon: <LineChart size={24} />,
      description: 'Track your emotional wellbeing and growth',
      cta: 'View progress',
      color: 'bg-gradient-to-br from-emerald-400 to-teal-500',
      link: '/progress',
    },
    {
      title: 'Inspirational Quotes',
      icon: <Quote size={24} />,
      description: 'Find wisdom in our curated collection of quotes',
      cta: 'Browse quotes',
      color: 'bg-gradient-to-br from-amber-400 to-orange-500',
      link: '/quotes',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-neutral-900 dark:text-white"
        >
          {greeting}, User 🌿
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-neutral-600 dark:text-neutral-400"
        >
          Let's nurture your mind today
        </motion.p>
      </div>
      
      {/* Quote Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8 p-6 rounded-xl bg-white dark:bg-neutral-800 shadow-md"
      >
        <p className="text-lg text-neutral-800 dark:text-neutral-200 italic mb-2">"{quote.text}"</p>
        <p className="text-right text-neutral-600 dark:text-neutral-400">— {quote.author}</p>
      </motion.div>
      
      {/* Mood Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mb-8 p-6 rounded-xl bg-white dark:bg-neutral-800 shadow-md"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">Weekly Mood</h2>
          <Link to="/progress" className="text-primary dark:text-primary-light text-sm flex items-center hover:underline">
            View details <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>
        
        <div className="h-32 flex items-end space-x-2">
          {moodData.map((day, i) => (
            <div key={i} className="flex flex-col items-center flex-1">
              <div 
                className="w-full rounded-t-sm bg-primary-light dark:bg-primary transition-all duration-300"
                style={{ height: `${day.level * 10}%` }}
              ></div>
              <span className="text-xs text-neutral-600 dark:text-neutral-400 mt-2">{day.day}</span>
            </div>
          ))}
        </div>
      </motion.div>
      
      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
            className="overflow-hidden rounded-xl shadow-md"
          >
            <div className={`p-6 text-white ${card.color}`}>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">{card.title}</h3>
                <div className="p-2 bg-white/20 rounded-full">{card.icon}</div>
              </div>
              <p className="mb-6 opacity-90">{card.description}</p>
              <Link 
                to={card.link}
                className="inline-flex items-center text-sm font-medium hover:underline"
              >
                {card.cta} <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;