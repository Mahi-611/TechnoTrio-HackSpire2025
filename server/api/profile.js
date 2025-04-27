import express from 'express';
import supabase from '../utils/index.js';

const router = express.Router();

// Fetch user profile
router.get('/:userId', async (req, res) => {
  const { userId } = req.params;

  try {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single();

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update user profile
router.put('/:userId', async (req, res) => {
  const { userId } = req.params;
  const { full_name, email } = req.body;

  try {
    const { data, error } = await supabase
      .from('profiles')
      .update({ full_name, email })
      .eq('id', userId);

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;