import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Heart, Share2, Bookmark, RotateCcw } from 'lucide-react';

// Mock quotes data - would be replaced with API calls
const quotesCollection = [
  {
    id: 1,
    text: "In the midst of winter, I found there was, within me, an invincible summer.",
    author: "Albert Camus",
    category: "resilience",
  },
  {
    id: 2,
    text: "The wound is the place where the Light enters you.",
    author: "Rumi",
    category: "healing",
  },
  {
    id: 3,
    text: "You are allowed to be both a masterpiece and a work in progress simultaneously.",
    author: "Sophia Bush",
    category: "self-acceptance",
  },
  {
    id: 4,
    text: "What you think, you become. What you feel, you attract. What you imagine, you create.",
    author: "Buddha",
    category: "mindfulness",
  },
  {
    id: 5,
    text: "Sometimes the bravest and most important thing you can do is just show up.",
    author: "Brené Brown",
    category: "courage",
  },
  {
    id: 6,
    text: "Your task is not to seek for love, but merely to seek and find all the barriers within yourself that you have built against it.",
    author: "Rumi",
    category: "healing",
  },
  {
    id: 7,
    text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
    category: "resilience",
  },
  {
    id: 8,
    text: "You don't have to be positive all the time. It's perfectly okay to feel sad, angry, annoyed, frustrated, scared, or anxious. Having feelings doesn't make you a negative person. It makes you human.",
    author: "Lori Deschene",
    category: "self-acceptance",
  },
];

const categories = ["All", "Resilience", "Healing", "Self-acceptance", "Mindfulness", "Courage"];

const QuotesPage = () => {
  const [quotes, setQuotes] = useState(quotesCollection);
  const [filteredQuotes, setFilteredQuotes] = useState(quotesCollection);
  const [activeCategory, setActiveCategory] = useState("All");
  const [likedQuotes, setLikedQuotes] = useState<number[]>([]);
  const [savedQuotes, setSavedQuotes] = useState<number[]>([]);
  const [dailyQuote, setDailyQuote] = useState(quotesCollection[0]);
  
  useEffect(() => {
    // Set a random quote as daily quote
    const randomIndex = Math.floor(Math.random() * quotesCollection.length);
    setDailyQuote(quotesCollection[randomIndex]);
  }, []);
  
  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredQuotes(quotes);
    } else {
      setFilteredQuotes(
        quotes.filter(quote => quote.category.toLowerCase() === activeCategory.toLowerCase())
      );
    }
  }, [activeCategory, quotes]);
  
  const handleLike = (id: number) => {
    if (likedQuotes.includes(id)) {
      setLikedQuotes(likedQuotes.filter(quoteId => quoteId !== id));
    } else {
      setLikedQuotes([...likedQuotes, id]);
    }
  };
  
  const handleSave = (id: number) => {
    if (savedQuotes.includes(id)) {
      setSavedQuotes(savedQuotes.filter(quoteId => quoteId !== id));
    } else {
      setSavedQuotes([...savedQuotes, id]);
    }
  };
  
  const handleShare = (quote: string, author: string) => {
    // This would be replaced with actual share functionality
    alert(`Sharing: "${quote}" - ${author}`);
  };
  
  const refreshDailyQuote = () => {
    let randomIndex = Math.floor(Math.random() * quotesCollection.length);
    while (quotesCollection[randomIndex].id === dailyQuote.id) {
      randomIndex = Math.floor(Math.random() * quotesCollection.length);
    }
    setDailyQuote(quotesCollection[randomIndex]);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-3xl font-bold text-neutral-900 dark:text-white mb-2">Inspirational Quotes</h1>
        <p className="text-neutral-600 dark:text-neutral-400">
          Find wisdom and comfort in words that resonate with your soul ✨
        </p>
      </motion.div>
      
      {/* Daily Quote */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <div className="relative overflow-hidden rounded-xl shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary to-primary opacity-90"></div>
          <img
            src="https://images.pexels.com/photos/1834407/pexels-photo-1834407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Peaceful nature scene"
            className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
          />
          
          <div className="relative p-8 md:p-12 text-white">
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center">
                <BookOpen size={24} className="mr-2" />
                <h2 className="text-lg md:text-xl font-semibold">Quote of the Day</h2>
              </div>
              <button
                onClick={refreshDailyQuote}
                className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-300"
                aria-label="Refresh daily quote"
              >
                <RotateCcw size={18} />
              </button>
            </div>
            
            <blockquote className="mb-6">
              <p className="text-xl md:text-2xl lg:text-3xl font-medium mb-4 leading-relaxed">
                "{dailyQuote.text}"
              </p>
              <footer className="text-white/80 text-right">— {dailyQuote.author}</footer>
            </blockquote>
            
            <div className="flex space-x-3">
              <button
                onClick={() => handleLike(dailyQuote.id)}
                className={`p-2 rounded-full ${
                  likedQuotes.includes(dailyQuote.id) 
                    ? 'bg-white text-pink-500' 
                    : 'bg-white/20 hover:bg-white/30 text-white'
                } transition-colors duration-300`}
                aria-label="Like quote"
              >
                <Heart size={18} className={likedQuotes.includes(dailyQuote.id) ? 'fill-current' : ''} />
              </button>
              
              <button
                onClick={() => handleSave(dailyQuote.id)}
                className={`p-2 rounded-full ${
                  savedQuotes.includes(dailyQuote.id) 
                    ? 'bg-white text-secondary' 
                    : 'bg-white/20 hover:bg-white/30 text-white'
                } transition-colors duration-300`}
                aria-label="Save quote"
              >
                <Bookmark size={18} className={savedQuotes.includes(dailyQuote.id) ? 'fill-current' : ''} />
              </button>
              
              <button
                onClick={() => handleShare(dailyQuote.text, dailyQuote.author)}
                className="p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors duration-300"
                aria-label="Share quote"
              >
                <Share2 size={18} />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Category Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-8 overflow-x-auto py-2"
      >
        <div className="flex space-x-2">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors duration-300 ${
                activeCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </motion.div>
      
      {/* Quotes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredQuotes.map((quote, index) => (
          <motion.div
            key={quote.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * (index % 6) }}
            className="card hover:shadow-lg"
          >
            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-light mb-4">
              {quote.category.charAt(0).toUpperCase() + quote.category.slice(1)}
            </span>
            
            <blockquote className="mb-4">
              <p className="text-neutral-800 dark:text-neutral-200 text-lg mb-3">"{quote.text}"</p>
              <footer className="text-neutral-600 dark:text-neutral-400 text-right">— {quote.author}</footer>
            </blockquote>
            
            <div className="flex space-x-3">
              <button
                onClick={() => handleLike(quote.id)}
                className={`p-2 rounded-full ${
                  likedQuotes.includes(quote.id) 
                    ? 'bg-pink-50 dark:bg-pink-900/20 text-pink-500' 
                    : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400'
                } transition-colors duration-300`}
                aria-label="Like quote"
              >
                <Heart size={18} className={likedQuotes.includes(quote.id) ? 'fill-current' : ''} />
              </button>
              
              <button
                onClick={() => handleSave(quote.id)}
                className={`p-2 rounded-full ${
                  savedQuotes.includes(quote.id) 
                    ? 'bg-secondary/10 dark:bg-secondary/20 text-secondary' 
                    : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400'
                } transition-colors duration-300`}
                aria-label="Save quote"
              >
                <Bookmark size={18} className={savedQuotes.includes(quote.id) ? 'fill-current' : ''} />
              </button>
              
              <button
                onClick={() => handleShare(quote.text, quote.author)}
                className="p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 
                  hover:text-primary dark:hover:text-primary-light transition-colors duration-300"
                aria-label="Share quote"
              >
                <Share2 size={18} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default QuotesPage;