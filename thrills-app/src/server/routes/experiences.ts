import express from "express";
import { Error } from "mongoose";

const router = express.Router();

const Experiences = require("../models/experience");

module.exports = router;

//Get CRUD method
router.get("/experiences", async (req, res) => {
  try {
    const experiences = await Experiences.find()
    
    console.log(experiences);
    
    res.json(experiences); 
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).json({ message: err.message });
    } else {
      res.status(500).json({ message: "Errore sconosciuto" });
    }
  }
});

export default router;
