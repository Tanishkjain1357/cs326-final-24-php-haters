import express from 'express';
import { readFile, writeFile } from 'fs/promises';
import logger from 'morgan';
// import faker


// Write functions for each of the endpoints

const app = express();
const port = 3000;

// Add Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// TODO: Add the morgan middleware to the app
app.use(logger('dev'));
// TODO: Add the express.static middleware to the app.
app.use('/client', express.static('client'));

// TODO: API ENDPOINTS

app.all('*', async (request, response) => {
    response.status(404).send(`Not found: ${request.path}`);
});

// Start the server.
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});