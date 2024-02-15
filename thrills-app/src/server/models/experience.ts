import mongoose from "mongoose";

const experienceSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  caption: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Experiences", experienceSchema);
