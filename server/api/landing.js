import express from 'express';
const router = express.Router();

// Landing Page API
router.get('/landing-data', (req, res) => {
  const heroSection = {
    title: 'InnerNova',
    subtitle: 'A gentle space for your thoughts to rest, reflect, and rise.',
    image: 'https://images.pexels.com/photos/3560044/pexels-photo-3560044.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ctaPrimary: { text: 'Get Started', link: '/dashboard' },
    ctaSecondary: { text: 'Chat with InnoBot', link: '/chat' },
  };

  const features = [
    {
      icon: 'message-circle',
      title: 'InnoBot Chat Assistant',
      description: 'Engage with our AI assistant designed to support your mental wellness journey with compassion and understanding.',
    },
    {
      icon: 'heart',
      title: 'Daily Affirmations',
      description: 'Start each day with personalized positive affirmations tailored to your current emotional state.',
    },
    {
      icon: 'line-chart',
      title: 'Progress Tracking',
      description: 'Monitor your emotional wellbeing over time with intuitive visualizations and insightful analytics.',
    },
    {
      icon: 'quote',
      title: 'Motivational Quotes',
      description: 'Draw inspiration from our curated collection of quotes that inspire peace, growth, and self-compassion.',
    },
  ];

  res.json({ heroSection, features });
});

export default router;