// index.js
import express from 'express';
import { genres } from './genresData';

const router = express.Router();

// ... Existing GET routes ...

// Add a genre
router.post('/', (req, res) => {
    const { id, name } = req.body;
    if (!id || !name) {
        return res.status(400).json({ message: 'Invalid genre data' });
    }

    const existingGenre = genres.find((genre) => genre.id === id);
    if (existingGenre) {
        return res.status(409).json({ message: 'Genre already exists' });
    }

    const newGenre = { id, name };
    genres.push(newGenre);
    res.status(201).json(newGenre);
});

export default router;
