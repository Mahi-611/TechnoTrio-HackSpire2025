import express from 'express';
const router = express.Router();

// Mock quotes data
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

// Get all quotes
router.get('/quotes', (req, res) => {
  res.json({ quotes: quotesCollection, categories });
});

export default router;