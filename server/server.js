import express from 'express';
import { readFile, writeFile } from 'fs/promises';
import logger from 'morgan';
// import faker


// Write functions for each of the endpoints

const app = express();
const port = 5500;

// Add Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// TODO: Add the morgan middleware to the app
app.use(logger('dev'));
// TODO: Add the express.static middleware to the app.
app.use('/static', express.static('static'));

// TODO: API ENDPOINTS

app.all('*', async (request, response) => {
    response.status(404).send(`Not found: ${request.path}`);
});

// Start the server.
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/client', express.static('client'));

app.post('/signup', async (request, response) => {
    const options = request.body;
    signupCounter(response, options.name);
});

app.post('/createEvent', async (request, response) => {
    const options = request.body;
    createEvCounter(response, options.name);
});

app.delete('/deleteEvent', async (request, response) => {
    const options = request.query; 
    deleteEvCounter(response, options.name);
});

app.get('/majorReq', async (request, response) => {
    const options = request.query;
    majorCounter(response, options.name);
});

app.get('/clubRSO', async (request, response) => {
    const options = request.query;
    clubRSOCounter(response, options.name);
});

app.get('/resProf', async (request, response) => {
    const options = request.query;
    resProfCounter(response, options.name);
});

app.get('/carDev', async (request, response) => {
    const options = request.query;
    carDevCounter(response, options.name);
});