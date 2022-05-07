import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    maxlength: 255,
    required: true,
  },
  instructor: {
    type: String,
    maxlength: 255,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  credits: {
    type: Number,
    min: 1,
  },
});

const researchSchema = new mongoose.Schema({
  name: {
    type: String,
    maxlength: 255,
    required: true,
  },
  faculty: {
    type: String,
    maxlength: 255,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const clubSchema = new mongoose.Schema({
  name: {
    type: String,
    maxlength: 255,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const internshipSchema = new mongoose.Schema({
  Employee: {
    type: String,
    maxlength: 255,
    required: true,
  },
  Industry: {
    type: String,
    required: true,
  },
  Location: {
    type: String,
    required: true,
  },
});

const course = mongoose.model("course", courseSchema);
const club = mongoose.model("club", clubSchema);
const internship = mongoose.model("internship", internshipSchema);
const research = mongoose.model("research", researchSchema);

export { course, club, internship, research };