import dotenv from 'dotenv';
dotenv.config();

const config = {
  geminiApiKey: process.env.GEMINI_API_KEY,
};

export default config;