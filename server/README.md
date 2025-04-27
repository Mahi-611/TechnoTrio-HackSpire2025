# Backend for InnerNova

This folder contains the backend implementation for the InnerNova project. Below is an overview of the backend structure:

## Folder Structure

- **/api**: Contains API route handlers for various features like chatbot, affirmations, mood tracking, etc.
- **/models**: Database models for users, affirmations, mood entries, etc.
- **/services**: Business logic and services for handling chatbot interactions, recommendations, etc.
- **/config**: Configuration files for database, environment variables, etc.
- **/utils**: Utility functions and helpers.
- **/tests**: Test cases for backend APIs and services.

## Setup Instructions

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up environment variables in a `.env` file:
   ```env
   DATABASE_URL=your_database_url
   SUPABASE_KEY=your_supabase_key
   JWT_SECRET=your_jwt_secret
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Run tests:
   ```bash
   npm test
   ```

## Features

- User authentication and management
- Chatbot API
- Affirmations API
- Mood tracking API
- Personalized recommendations API

Feel free to contribute and enhance the backend!