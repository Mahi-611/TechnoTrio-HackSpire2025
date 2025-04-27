import express from 'express';
const router = express.Router();

// Dashboard API
router.get('/dashboard-data', (req, res) => {
  const quotes = [
    { text: 'You are not a drop in the ocean. You are the entire ocean in a drop.', author: 'Rumi' },
    { text: "Your present circumstances don't determine where you can go; they merely determine where you start.", author: 'Nido Qubein' },
    { text: 'The wound is the place where the Light enters you.', author: 'Rumi' },
    { text: 'In the midst of winter, I found there was, within me, an invincible summer.', author: 'Albert Camus' },
  ];

  const moodData = [
    { day: 'Mon', level: 6 },
    { day: 'Tue', level: 8 },
    { day: 'Wed', level: 7 },
    { day: 'Thu', level: 9 },
    { day: 'Fri', level: 5 },
    { day: 'Sat', level: 8 },
    { day: 'Sun', level: 8 },
  ];

  res.json({ quotes, moodData });
});

export default router;