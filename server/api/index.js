import express from 'express';
import chatbotRoutes from './chatbot.js';
import communityRoutes from './community.js';
import dashboardRoutes from './dashboard.js';
import landingRoutes from './landing.js';
import profileRoutes from './profile.js';
import progressRoutes from './progress.js';
import quotesRoutes from './quotes.js';
import authRoutes from './auth.js';
import themeRoutes from './theme.js';
const router = express.Router();

// Affirmations and Backgrounds API
router.get('/affirmations-data', (req, res) => {
  const affirmations = [
    "I am worthy of love and respect, just as I am.",
    "I embrace my emotions as valid and important messengers.",
    "I give myself permission to rest and recharge without guilt.",
    "My thoughts and feelings matter and deserve to be acknowledged.",
    "I am resilient and can navigate life's challenges with grace.",
    "I honor my boundaries and respect my needs.",
    "Healing takes time, and I am patient with my journey.",
    "I am growing and evolving every day, even when it's hard to see.",
    "My presence in this world makes a positive difference.",
    "I release the need to compare my journey to others'.",
    "I choose to focus on progress, not perfection.",
    "Today, I will be kind to myself in thoughts, words, and actions.",
    "I trust in my ability to handle whatever comes my way."
  ];

  const backgrounds = [
    "bg-gradient-to-br from-green-400 to-blue-500",
    "bg-gradient-to-br from-purple-400 to-pink-500",
    "bg-gradient-to-br from-yellow-400 to-orange-500",
    "bg-gradient-to-br from-blue-400 to-indigo-500",
    "bg-gradient-to-br from-red-400 to-pink-500",
    "bg-gradient-to-br from-teal-400 to-blue-500",
  ];

  res.json({ affirmations, backgrounds });
});

// Chatbot Routes
router.use('/chatbot', chatbotRoutes);

// Community Routes
router.use('/community', communityRoutes);

// Dashboard Routes
router.use('/dashboard', dashboardRoutes);

// Landing Page Routes
router.use('/landing', landingRoutes);

// Profile Routes
router.use('/profile', profileRoutes);

// Progress Tracker Routes
router.use('/progress', progressRoutes);

// Quotes Routes
router.use('/quotes', quotesRoutes);

// Auth Routes
router.use('/auth', authRoutes);

// Theme Routes
router.use('/theme', themeRoutes);

// Quick Links API
router.get('/quick-links', (req, res) => {
  const quickLinks = [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'InnoBot Chat', path: '/chat' },
    { name: 'Progress Tracker', path: '/progress' },
    { name: 'Motivational Quotes', path: '/quotes' }
  ];
  res.json({ quickLinks });
});

// Support Information API
router.get('/support', (req, res) => {
  const supportInfo = {
    message: 'Need help or have questions? Feel free to reach out.',
    contactLink: '/contact'
  };
  res.json({ supportInfo });
});

// Navigation Items API
router.get('/navigation-items', (req, res) => {
  const navigationItems = [
    { name: 'Home', path: '/', icon: 'home' },
    { name: 'Dashboard', path: '/dashboard', icon: 'heart' },
    { name: 'InnoBot', path: '/chat', icon: 'message-circle' },
    { name: 'Progress', path: '/progress', icon: 'line-chart' },
    { name: 'Quotes', path: '/quotes', icon: 'quote' },
    { name: 'Community', path: '/community', icon: 'users' },
    { name: 'Profile', path: '/profile', icon: 'user' }
  ];
  res.json({ navigationItems });
});

// Animated Background Configuration API
router.get('/animated-background', (req, res) => {
  const backgroundConfig = {
    themes: [
      { name: 'Light', colors: ['#ffffff', '#f0f0f0', '#e0e0e0'] },
      { name: 'Dark', colors: ['#000000', '#1a1a1a', '#333333'] },
      { name: 'Pastel', colors: ['#ffb3ba', '#ffdfba', '#ffffba', '#baffc9', '#bae1ff'] },
      { name: 'Gradient', colors: ['#ff7eb3', '#ff758c', '#ff6f61', '#ff5c33'] }
    ],
    animationSpeed: 'medium',
    defaultTheme: 'Gradient'
  };
  res.json({ backgroundConfig });
});

// Authentication Verification API
router.get('/auth/verify', (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  // Simulate token verification (replace with real logic)
  const isValid = token === 'valid-token';

  if (!isValid) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  res.json({ message: 'Authenticated' });
});

// User Authentication API
router.post('/auth/login', async (req, res) => {
  const { email, password } = req.body;

  // Simulate authentication logic (replace with real database or Supabase logic)
  if (email === 'test@example.com' && password === 'password123') {
    return res.json({
      user: { id: '1', email },
      token: 'valid-token',
    });
  }

  res.status(401).json({ message: 'Invalid email or password' });
});

// Sign-Out API
router.post('/auth/logout', (req, res) => {
  // Simulate sign-out logic (e.g., token invalidation)
  res.json({ message: 'Signed out successfully' });
});

export default router;