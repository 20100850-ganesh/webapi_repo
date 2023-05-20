/* eslint-disable no-undef */
import dotenv from 'dotenv';
import express from 'express';
import createAccountsRouter from './src/accounts/routes';
import buildDependencies from './src/config/dependencies';
import createMoviesRouter from './src/movies/routes';
import db from './src/config/db';
import errorHandler from './src/utils/ErrorHandler';
import genresRouter from '/workspaces/webapi_repo/src/genres/routes/index.js';



require('dotenv').config();
db.init();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use('/api/movies', createMoviesRouter(dependencies));
app.use('/api/genres', genresRouter);
app.use(errorHandler);

const dependencies = buildDependencies();

app.use('/api/accounts', createAccountsRouter(dependencies));

app.listen(port, () => {
    console.info(`Server running at ${port}`);
});
