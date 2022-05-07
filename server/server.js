import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { readFile, writeFile } from "fs/promises";
import { course, club, internship, research } from "./models.js";
import logger from "morgan";
import path from "path";
import mongoose from "mongoose";
const app = express();
const calendarFile = "calendar.json";
const majorReqFile = "mReq.json";
const clubrsoFile = "crso.json";
const researchFile = "research.json";
const carDevFile = "careerDev.json";
const signUpFile = "signUp.json";

mongoose.connect(
  process.env.DATABASE_URL ||
  "mongodb+srv://shubhv2:Godofwar123@cluster0.o1pid.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
);
const db = mongoose.connection;

db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Database connected"));

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
const options = {
  dotfiles: "ignore",
  etag: true,
  extensions: ["htm", "html"],
  index: false,
  maxAge: "7d",
  redirect: false,
  setHeaders: function (res, path, stat) {
    res.set("x-timestamp", Date.now());
  },
};
app.use(logger("dev"));
app.use(express.static("public", options));
app.use("/asset", express.static("asset"));
// app.get("/", function (req, res) {
//   res.sendFile(path.resolve("./client/homepage.html"));
// });
app.get("/", async (req, res) => {
  return res.sendFile(path.resolve("./public/homepage.html"));
});
app.post("/signUp", async (req, res) => {
  const options = req.body;
  signupCounter(options.username, options.password);
  res.status(200).json({ status: "success" });
});

app.post("/createEvent", async (req, res) => {
  const options = req.body;
  const x = createEvCounter(options.evName, options.date, options.time);
  res.status(200).json({ status: "success" });
});

app.delete("/deleteEvent", async (req, res) => {
  const options = req.body;
});
///////////////////////////////////////////////////////////////////////////////////////
app.get("/majorReq", async (req, res) => {
  // Done by mongoose!
  console.log("GET");
  const allMajors = await course.find();
  res.status(200).send(allMajors);
});

app.post("/majorReq", async (req, res) => {
  //Done using mongoose!
  let { name, instructor, description, credits } = req.body;
  try {
    let temp = new course({ name, instructor, description, credits });
    await temp.save();
    res.status(200).send(temp);
  } catch (err) {
    return console.log(err.message);
  }
  // response.status(200).json({ status: "success" });
});

app.put("/majorReq", async (req, res) => {
  //Done using mongoose!
  let { name, instructor, description, credits } = req.body;
  try {
    const doc = await course.findOneAndUpdate(
      { name: name },
      { instructor: instructor, description: description },
      { new: true }
    );
    res.status(200).send(doc);
  } catch (err) {
    return console.log(err.message);
  }
  // res.status(200).json({ status: "success" });
});

app.delete("/majorReq", async (req, res) => {
  //Done using mongoose!
  let { name, instructor, description, credits } = req.body;
  try {
    const temp = await course.findOne({ name: name });
    if (!temp) res.status(404).send("Resource to be deleted NOT FOUND!!");
    await course.deleteOne({ name: name });
    res.status(200).send("Document deleted Successfully!");
    // res.status(200).send(temp);
  } catch (err) {
    return console.log(err.message);
  }
  // res.status(200).json({ status: "success" });
});

////////////////////////////////////////////////////////////////////////////////////
//Routes for clubs
app.get("/clubRSO", async (req, res) => {
  const allClubs = await course.find();
  res.status(200).send(allClubs);
});

app.post("/clubRSO", async (req, res) => {
  //Done using mongoose!
  let { name, description } = req.body;
  try {
    let temp = new club({ name, description });
    await temp.save();
    res.status(200).send(temp);
  } catch (err) {
    return console.log(err.message);
  }
});

app.put("/clubRSO", async (req, res) => {
  //Done using mongoose!
  let { name, description } = req.body;
  try {
    const temp = await club.findOneAndUpdate(
      { name: name },
      { description: description },
      { new: true }
    );
    res.status(200).send(temp);
  } catch (err) {
    return console.log(err.message);
  }
  // res.status(200).json({ status: "success" });
});

app.delete("/clubRSO", async (req, res) => {
  //Done using mongoose!
  let { name } = req.body;
  try {
    const temp = await club.findOne({ name: name });
    if (!temp) res.status(404).send("Resource to be deleted NOT FOUND!!");
    await club.deleteOne({ name: name });
    res.status(200).send("Document deleted Successfully!");
    // res.status(200).send(temp);
  } catch (err) {
    return console.log(err.message);
  }
  // res.status(200).json({ status: "success" });
});

//////////////////////////////////////////////////////////////////////////////////////

app.get("/resProf", async (req, res) => {
  const allClubs = await research.find();
  res.status(200).send(allClubs);
});

app.post("/resProf", async (req, res) => {
  //Done using mongoose!
  let { name, faculty, description } = req.body;
  try {
    let temp = new research({ name, faculty, description });
    await temp.save();
    res.status(200).send(temp);
  } catch (err) {
    return console.log(err.message);
  }
});

app.put("/resProf", async (req, res) => {
  //Done using mongoose!
  let { name, faculty, description } = req.body;
  try {
    const temp = await research.findOneAndUpdate(
      { name: name },
      { description: description, faculty: faculty },
      { new: true }
    );
    res.status(200).send(temp);
  } catch (err) {
    return console.log(err.message);
  }
  // res.status(200).json({ status: "success" });
});

app.delete("/resProf", async (req, res) => {
  //Done using mongoose!
  let { name } = req.body;
  try {
    const temp = await research.findOne({ name: name });
    if (!temp) res.status(404).send("Resource to be deleted NOT FOUND!!");
    await research.deleteOne({ name: name });
    res.status(200).send("Document deleted Successfully!");
    // res.status(200).send(temp);
  } catch (err) {
    return console.log(err.message);
  }
  // res.status(200).json({ status: "success" });
});

//////////////////////////////////////////////////////////////////////////////////////

app.get("/carDev", async (req, res) => {
  const allClubs = await internship.find();
  res.status(200).send(allClubs);
});

app.post("/carDev", async (req, res) => {
  //Done using mongoose!
  let { Employee, Industry, Location } = req.body;
  try {
    let temp = new internship({ Employee, Industry, Location });
    await temp.save();
    res.status(200).send(temp);
  } catch (err) {
    return console.log(err.message);
  }
});

app.put("/carDev", async (req, res) => {
  //Done using mongoose!
  let { Employee, Industry, Location } = req.body;
  try {
    const temp = await internship.findOneAndUpdate(
      { Employee: Employee },
      { Industry: Industry, Location: Location },
      { new: true }
    );
    res.status(200).send(temp);
  } catch (err) {
    return console.log(err.message);
  }
  // res.status(200).json({ status: "success" });
});

app.delete("/carDev", async (req, res) => {
  //Done using mongoose!
  let { Employee } = req.body;
  try {
    const temp = await internship.findOne({ Employee: Employee });
    if (!temp) res.status(404).send("Resource to be deleted NOT FOUND!!");
    await internship.deleteOne({ Employee: Employee });
    res.status(200).send("Document deleted Successfully!");
    // res.status(200).send(temp);
  } catch (err) {
    return console.log(err.message);
  }
  // res.status(200).json({ status: "success" });
});

//////////////////////////////////////////////////////////////////////////////////////

// app.all("*", async (req, res) => {
//   res.status(404).send(`Not found: ${req.path}`);
// });

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server started on http://localhost:${3000}`);
});
