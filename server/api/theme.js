import express from 'express';
import supabase from '../utils/index.js';

const router = express.Router();

// Fetch user theme
router.get('/:userId', async (req, res) => {
  const { userId } = req.params;

  try {
    const { data, error } = await supabase
      .from('themes')
      .select('*')
      .eq('user_id', userId)
      .single();

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update user theme
router.put('/:userId', async (req, res) => {
  const { userId } = req.params;
  const { theme } = req.body;

  try {
    const { data, error } = await supabase
      .from('themes')
      .update({ theme })
      .eq('user_id', userId);

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;