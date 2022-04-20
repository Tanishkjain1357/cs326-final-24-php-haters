import express from 'express';
import { readFile, writeFile } from 'fs/promises';
import logger from 'morgan';

const calendarFile = 'calendar.json';
const majorReqFile = 'mReq.json';
const clubrsoFile = 'crso.json';
const researchFile = 'research.json';
const carDevFile = 'careerDev.json';
const signUpFile = 'signUp.json';

function readFiles(path) {
    return async () => {
        try {
            const data = await readFile(path, 'utf8');
            const x = JSON.parse(data);
            return x;
        } 
        catch (error) {
            return [];
        }
    };
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(logger('dev'));
app.use('/client', express.static('client'));

app.post('/signUp', async (request, response) => {
    const options = request.body;
    signupCounter(options.username, options.password);
    response.status(200).json({ status: "success" });
});

app.post('/createEvent', async (request, response) => {
    const options = request.body;
    const x = createEvCounter(options.evName, options.date, options.time);
    response.status(200).json({ status: "success" });
});

app.delete('/deleteEvent', async (request, response) => {
    const options = request.body;
});

app.post('/majorReq', async (request, response) => {
    const options = request.body;
    majorCounter(options.major, options.year, options.credits);
    response.status(200).json({ status: "success" });
});

app.post('/clubRSO', async (request, response) => {
    const options = request.body;
    clubRSOCounter(options.name);
    response.status(200).json({ status: "success" });
});

app.post('/resProf', async (request, response) => {
    const options = request.body;
    resProfCounter(options.research, options.prof);
    response.status(200).json({ status: "success" });
});

app.post('/carDev', async (request, response) => {
    const options = request.body;
    carDevCounter(options.cField);
    response.status(200).json({ status: "success" });
});

app.all('*', async (request, response) => {
    response.status(404).send(`Not found: ${request.path}`);
});

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});