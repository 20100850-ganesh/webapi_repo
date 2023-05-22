import dotenv from 'dotenv';
dotenv.config();

const config = {
  port: process.env.PORT || 8080,
  tmdbApiKey: process.env.TMDB_KEY,
  databaseUrl: process.env.DATABASE_URL,
};

export default config;
