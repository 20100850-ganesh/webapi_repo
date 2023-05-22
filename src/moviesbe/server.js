import express from 'express';
import movieRoutes from './routes/movieRoutes.js';
import config from './config.js';

const app = express();

// Body parsing middleware
app.use(express.json());

// Routes
app.use('/movies', movieRoutes);

// Start server
app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});
