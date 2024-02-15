import { NextFunction, Request, Response } from "express";

require("dotenv").config();
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const experiencesRouter = require("./routes/experiences");

const app = express();

app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:5173"],
    optionsSuccessStatus: 200,
  })
);


const port = process.env.PORT || 3001;

app.use(express.json());



const connectToMongoDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/thrills', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};


connectToMongoDB();

app.use("/", experiencesRouter);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});
