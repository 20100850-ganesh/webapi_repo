/* eslint-disable no-undef */
import dotenv from 'dotenv';
import express from 'express';
import moviesRouter from './src/movies';

dotenv.config();

const app = express();

const port = 8080;

app.use(express.json());
app.use('/api/movies', moviesRouter);

app.listen(port, () => {
    console.info(`Server running at ${port}`);
});
