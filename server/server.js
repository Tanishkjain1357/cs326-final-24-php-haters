import express from "express";
import { readFile, writeFile } from "fs/promises";
import logger from "morgan";
const app = express();
const calendarFile = "calendar.json";
const majorReqFile = "mReq.json";
const clubrsoFile = "crso.json";
const researchFile = "research.json";
const carDevFile = "careerDev.json";
const signUpFile = "signUp.json";

function readFiles(path) {
  return async () => {
    try {
      const data = await readFile(path, "utf8");
      const x = JSON.parse(data);
      return x;
    } catch (error) {
      return [];
    }
  };
}

const readEventFile = readFiles(calendarFile);
const readMajorFile = readFiles(majorReqFile);
const readClubFile = readFiles(clubrsoFile);
const readResFile = readFiles(researchFile);
const readCarFile = readFiles(carDevFile);
const readSignFile = readFiles(signUpFile);

function eventAdder(path) {
  return async (evName, date, time) => {
    const data = { evName, date, time };
    const scores = await readEventFile(path);
    scores.push(data);
    writeFile(path, JSON.stringify(scores), "utf8");
    return JSON.stringify(scores);
  };
}

function majorAdder(path) {
  return async (major, year, credits) => {
    console.log(major);
    const data = { major, year, credits };
    const scores = await readMajorFile(path);
    scores.push(data);
    writeFile(path, JSON.stringify(scores), "utf8");
  };
}

function clubAdder(path) {
  return async (name) => {
    console.log(name);
    const data = { name };
    const scores = await readClubFile(path);
    scores.push(data);
    writeFile(path, JSON.stringify(scores), "utf8");
  };
}

function resAdder(path) {
  return async (research, prof) => {
    console.log(research, prof);
    const data = { research, prof };
    const scores = await readResFile(path);
    scores.push(data);
    writeFile(path, JSON.stringify(scores), "utf8");
  };
}

function carAdder(path) {
  return async (cField) => {
    console.log(cField);
    const data = { cField };
    const scores = await readCarFile(path);
    scores.push(data);
    writeFile(path, JSON.stringify(scores), "utf8");
  };
}

function signAdder(path) {
  return async (username, password) => {
    console.log(username, password);
    const data = { username, password };
    const scores = await readSignFile(path);
    scores.push(data);
    writeFile(path, JSON.stringify(scores), "utf8");
  };
}

const createEvCounter = eventAdder(calendarFile);
const majorCounter = majorAdder(majorReqFile);
const clubRSOCounter = clubAdder(clubrsoFile);
const resProfCounter = resAdder(researchFile);
const carDevCounter = carAdder(carDevFile);
const signupCounter = signAdder(signUpFile);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(logger("dev"));
app.use("/client", express.static("client"));

app.post("/signUp", async (request, response) => {
  const options = request.body;
  signupCounter(options.username, options.password);
  response.status(200).json({ status: "success" });
});

app.post("/createEvent", async (request, response) => {
  const options = request.body;
  const x = createEvCounter(options.evName, options.date, options.time);
  response.status(200).json({ status: "success" });
});

app.delete("/deleteEvent", async (request, response) => {
  const options = request.body;
});

app.post("/majorReq", async (request, response) => {
  const options = request.body;
  majorCounter(options.major, options.year, options.credits);
  response.status(200).json({ status: "success" });
});

app.post("/clubRSO", async (request, response) => {
  const options = request.body;
  clubRSOCounter(options.name);
  response.status(200).json({ status: "success" });
});

app.post("/resProf", async (request, response) => {
  const options = request.body;
  resProfCounter(options.research, options.prof);
  response.status(200).json({ status: "success" });
});

app.post("/carDev", async (request, response) => {
  const options = request.body;
  carDevCounter(options.cField);
  response.status(200).json({ status: "success" });
});

app.all("*", async (request, response) => {
  response.status(404).send(`Not found: ${request.path}`);
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server started on http://localhost:${3000}`);
});
