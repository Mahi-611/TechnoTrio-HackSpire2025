import express from 'express';
const router = express.Router();

// Community Platforms and Events API
router.get('/community-data', (req, res) => {
  const communityPlatforms = [
    {
      name: 'Instagram Community',
      description: 'Join our Instagram community for daily inspiration, affirmations, and wellness tips.',
      icon: 'instagram',
      bgColor: 'bg-gradient-to-br from-purple-500 to-pink-500',
      link: 'https://instagram.com',
    },
    {
      name: 'Discord Support Group',
      description: 'Connect with others on similar wellness journeys and share experiences in a safe space.',
      icon: 'message-circle',
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

  res.json({ communityPlatforms, upcomingEvents });
});

export default router;