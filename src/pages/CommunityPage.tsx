import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Instagram, MessageCircle, Users, ArrowRight, Heart, Calendar } from 'lucide-react';

const CommunityPage = () => {
  const communityPlatforms = [
    {
      name: 'Instagram Community',
      description: 'Join our Instagram community for daily inspiration, affirmations, and wellness tips.',
      icon: <Instagram size={32} className="text-white" />,
      bgColor: 'bg-gradient-to-br from-purple-500 to-pink-500',
      link: 'https://instagram.com',
    },
    {
      name: 'Discord Support Group',
      description: 'Connect with others on similar wellness journeys and share experiences in a safe space.',
      icon: <MessageCircle size={32} className="text-white" />,
      bgColor: 'bg-gradient-to-br from-indigo-500 to-blue-600',
      link: 'https://discord.com',
    },
  ];
  
  const upcomingEvents = [
    {
      title: 'Meditation Mondays',
      date: 'Every Monday, 8:00 PM',
      description: 'Join our community meditation session to start your week with calm and focus.',
      platform: 'Discord',
    },
    {
      title: 'Wellness Wednesday Workshop',
      date: 'June 15, 7:00 PM',
      description: 'Learn practical techniques for managing stress and anxiety in daily life.',
      platform: 'Zoom',
    },
    {
      title: 'Gratitude Circle',
      date: 'Last Friday of every month',
      description: "Share what you're grateful for and hear perspectives that brighten your outlook.",
      platform: 'Discord',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-3xl font-bold text-neutral-900 dark:text-white mb-2">Join Our Community</h1>
        <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
          Connect with others on similar wellness journeys. Share experiences, find support, and grow together in our nurturing community spaces. 🌱
        </p>
      </motion.div>
      
      {/* Community Platforms */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
      >
        {communityPlatforms.map((platform, index) => (
          <div key={index} className="rounded-xl overflow-hidden shadow-lg">
            <div className={`${platform.bgColor} p-8`}>
              <div className="flex justify-between items-start mb-4">
                <div className="p-4 bg-white/20 rounded-full">
                  {platform.icon}
                </div>
              </div>
              <h2 className="text-2xl font-semibold text-white mb-3">{platform.name}</h2>
              <p className="text-white/90 mb-6">{platform.description}</p>
              <a
                href={platform.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 rounded-lg bg-white text-neutral-900 font-medium 
                  hover:bg-opacity-90 transition-colors duration-300"
              >
                Join Now <ArrowRight size={16} className="ml-2" />
              </a>
            </div>
          </div>
        ))}
      </motion.div>
      
      {/* Community Benefits */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-16"
      >
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">Why Join Our Community?</h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-3"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 dark:bg-primary/20 
              text-primary dark:text-primary-light mb-4">
              <Heart size={32} />
            </div>
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-3">Support & Understanding</h3>
            <p className="text-neutral-700 dark:text-neutral-400">
              Connect with others who understand your journey and provide empathetic support without judgment.
            </p>
          </div>
          
          <div className="card text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 dark:bg-primary/20 
              text-primary dark:text-primary-light mb-4">
              <Users size={32} />
            </div>
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-3">Shared Experiences</h3>
            <p className="text-neutral-700 dark:text-neutral-400">
              Learn from others' experiences and share your own insights to help others on their wellness journey.
            </p>
          </div>
          
          <div className="card text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 dark:bg-primary/20 
              text-primary dark:text-primary-light mb-4">
              <Calendar size={32} />
            </div>
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-3">Regular Events</h3>
            <p className="text-neutral-700 dark:text-neutral-400">
              Participate in regular workshops, guided meditations, and discussions led by wellness professionals.
            </p>
          </div>
        </div>
      </motion.div>
      
      {/* Upcoming Events */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">Upcoming Community Events</h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-3"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingEvents.map((event, index) => (
            <div key={index} className="card hover:shadow-lg">
              <div className="mb-4 flex justify-between items-start">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 dark:bg-primary/20 
                  text-primary dark:text-primary-light">
                  {event.platform}
                </span>
                <Calendar size={20} className="text-neutral-500 dark:text-neutral-400" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">{event.title}</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">{event.date}</p>
              <p className="text-neutral-700 dark:text-neutral-400 mb-4">{event.description}</p>
              <Link
                to="/events"
                className="inline-flex items-center text-primary dark:text-primary-light hover:underline"
              >
                Learn more <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default CommunityPage;