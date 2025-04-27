import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import apiRoutes from './api/index.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// API Routes
app.use('/api', apiRoutes);

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});