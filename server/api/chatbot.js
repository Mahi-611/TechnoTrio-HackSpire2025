import express from 'express';
import axios from 'axios';
import config from '../config/index.js';
const router = express.Router();

// Chatbot API with Gemini API integration
router.post('/chatbot', async (req, res) => {
  const { message } = req.body;

  try {
    // Call Gemini API for NLP-based response generation
    const response = await axios.post('https://api.gemini.com/v1/nlp/generate', {
      prompt: message,
      max_tokens: 150,
    }, {
      headers: {
        'Authorization': `Bearer ${config.geminiApiKey}`,
        'Content-Type': 'application/json',
      },
    });

    const botResponse = response.data.generated_text;
    res.json({ response: botResponse });
  } catch (error) {
    console.error('Error calling Gemini API:', error);
    res.status(500).json({ response: "I'm sorry, I couldn't process your message. Please try again later." });
  }
});

export default router;