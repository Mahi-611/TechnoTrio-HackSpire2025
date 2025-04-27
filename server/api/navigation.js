import express from 'express';
const router = express.Router();

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

export default router;