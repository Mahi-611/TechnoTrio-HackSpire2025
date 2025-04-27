import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, RefreshCw, Download, Share2 } from 'lucide-react';
import axios from 'axios';

const AffirmationsPage = () => {
  const [currentAffirmation, setCurrentAffirmation] = useState("");
  const [currentBackground, setCurrentBackground] = useState("");
  const [liked, setLiked] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    // Fetch affirmations and backgrounds from the backend
    axios.get('/api/affirmations-data').then((response) => {
      const { affirmations, backgrounds } = response.data;
      const randomAffirmation = affirmations[Math.floor(Math.random() * affirmations.length)];
      const randomBackground = backgrounds[Math.floor(Math.random() * backgrounds.length)];

      setCurrentAffirmation(randomAffirmation);
      setCurrentBackground(randomBackground);
    });
  }, []);

  const generateAffirmation = () => {
    setIsGenerating(true);
    setLiked(false);

    // Fetch new affirmation and background
    axios.get('/api/affirmations-data').then((response) => {
      const { affirmations, backgrounds } = response.data;
      const randomAffirmation = affirmations[Math.floor(Math.random() * affirmations.length)];
      const randomBackground = backgrounds[Math.floor(Math.random() * backgrounds.length)];

      setCurrentAffirmation(randomAffirmation);
      setCurrentBackground(randomBackground);
      setIsGenerating(false);
    });
  };

  const handleLike = () => {
    setLiked(!liked);
  };

  const handleShare = () => {
    alert("Sharing functionality would be implemented here!");
  };

  const handleDownload = () => {
    alert("Download functionality would be implemented here!");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl font-bold text-neutral-900 dark:text-white mb-2">Daily Affirmations</h1>
          <p className="text-neutral-600 dark:text-neutral-400">
            Nurture your mind with positive affirmations tailored for you 🌱
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div
            className={`relative rounded-xl shadow-lg overflow-hidden aspect-video flex items-center justify-center p-8 ${currentBackground}`}
          >
            {isGenerating ? (
              <div className="flex flex-col items-center justify-center text-white">
                <RefreshCw size={32} className="animate-spin mb-4" />
                <p>Generating your affirmation...</p>
              </div>
            ) : (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-2xl md:text-3xl font-semibold text-white text-center"
              >
                "{currentAffirmation}"
              </motion.p>
            )}
          </div>
        </motion.div>

        <div className="flex justify-center space-x-4 mb-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleLike}
            className="p-3 rounded-full bg-white dark:bg-neutral-800 shadow-md text-neutral-700 dark:text-neutral-300 
              hover:text-primary dark:hover:text-primary-light transition-colors duration-300"
            aria-label="Like affirmation"
          >
            <Heart size={24} className={liked ? 'fill-current text-pink-500' : ''} />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={generateAffirmation}
            disabled={isGenerating}
            className="p-3 rounded-full bg-white dark:bg-neutral-800 shadow-md text-neutral-700 dark:text-neutral-300 
              hover:text-primary dark:hover:text-primary-light transition-colors duration-300"
            aria-label="Generate new affirmation"
          >
            <RefreshCw size={24} className={isGenerating ? 'animate-spin' : ''} />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDownload}
            className="p-3 rounded-full bg-white dark:bg-neutral-800 shadow-md text-neutral-700 dark:text-neutral-300 
              hover:text-primary dark:hover:text-primary-light transition-colors duration-300"
            aria-label="Download affirmation as image"
          >
            <Download size={24} />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleShare}
            className="p-3 rounded-full bg-white dark:bg-neutral-800 shadow-md text-neutral-700 dark:text-neutral-300 
              hover:text-primary dark:hover:text-primary-light transition-colors duration-300"
            aria-label="Share affirmation"
          >
            <Share2 size={24} />
          </motion.button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="card">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">About Affirmations</h2>
            <p className="text-neutral-700 dark:text-neutral-400 mb-4">
              Positive affirmations are powerful statements that can help reshape thought patterns. When repeated 
              regularly, they can influence your subconscious mind, reduce negative thoughts, and promote a 
              positive mindset.
            </p>
            <p className="text-neutral-700 dark:text-neutral-400">
              Our affirmations are crafted to support mental wellness and inner strength.
            </p>
          </div>

          <div className="card">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">How to Use Affirmations</h2>
            <ol className="text-neutral-700 dark:text-neutral-400 space-y-2 list-decimal pl-4">
              <li>Read your affirmation aloud every morning</li>
              <li>Repeat it throughout the day when needed</li>
              <li>Save favorites for when you need them most</li>
              <li>Share ones that resonate with others</li>
              <li>Reflect on how the affirmation makes you feel</li>
            </ol>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AffirmationsPage;