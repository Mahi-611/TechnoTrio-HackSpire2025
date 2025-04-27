import express from 'express';
const router = express.Router();

// Mock progress data
const progressData = [
  { date: '2025-04-20', mood: 7, anxiety: 3, energy: 6, sleep: 8 },
  { date: '2025-04-21', mood: 6, anxiety: 4, energy: 5, sleep: 7 },
  { date: '2025-04-22', mood: 8, anxiety: 2, energy: 8, sleep: 8 },
  { date: '2025-04-23', mood: 5, anxiety: 6, energy: 4, sleep: 6 },
  { date: '2025-04-24', mood: 7, anxiety: 3, energy: 6, sleep: 7 },
  { date: '2025-04-25', mood: 9, anxiety: 1, energy: 9, sleep: 9 },
  { date: '2025-04-26', mood: 8, anxiety: 2, energy: 7, sleep: 8 },
];

const weeklyAverages = [
  { week: 'Week 1', mood: 7.1, anxiety: 3.0, energy: 6.4, sleep: 7.6 },
  { week: 'Week 2', mood: 7.9, anxiety: 2.3, energy: 7.7, sleep: 8.0 },
];

// Get progress data
router.get('/progress', (req, res) => {
  res.json({ progressData, weeklyAverages });
});

export default router;