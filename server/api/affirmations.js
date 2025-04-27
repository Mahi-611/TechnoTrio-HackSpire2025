import express from 'express';
import supabase from '../utils/index.js';
const router = express.Router();

// Affirmations and Backgrounds API
router.get('/affirmations-data', async (req, res) => {
  try {
    const { data: affirmations, error: affirmationsError } = await supabase
      .from('affirmations')
      .select('*');

    if (affirmationsError) {
      return res.status(500).json({ error: affirmationsError.message });
    }

    const backgrounds = [
      "bg-gradient-to-br from-green-400 to-blue-500",
      "bg-gradient-to-br from-purple-400 to-pink-500",
      "bg-gradient-to-br from-yellow-400 to-orange-500",
      "bg-gradient-to-br from-blue-400 to-indigo-500",
      "bg-gradient-to-br from-red-400 to-pink-500",
      "bg-gradient-to-br from-teal-400 to-blue-500",
    ];

    res.json({ affirmations, backgrounds });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;