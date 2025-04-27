import express from 'express';
import { createClient } from '@supabase/supabase-js';

const router = express.Router();

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

// User signup endpoint
router.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Sign up the user
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: name,
        },
      },
    });

    if (authError) throw authError;

    // Create user profile in the profiles table
    const { error: profileError } = await supabase
      .from('profiles')
      .insert([
        {
          id: authData.user.id,
          full_name: name,
          email,
        },
      ]);

    if (profileError) throw profileError;

    res.status(201).json({ message: 'User signed up successfully', user: authData.user });
  } catch (error) {
    res.status(400).json({ message: error.message || 'Signup failed' });
  }
});

export default router;