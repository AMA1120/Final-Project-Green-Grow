const express = require("express");
const Agrarian = require("../models/agrarianServCen");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const env = require("dotenv").config();

router.post("/add", async (req, res) => {
  const {
    name,
    province,
    district,
    municipalcouncil,
    city,
    username,
    password,
  } = req.body;
  const encryptedPassword = await bcrypt.hash(password, 10);
  try {
    const oldAgrarian = await Agrarian.findOne({ username });
    if (oldAgrarian) {
      res.status(403).send({ error: "User Exists" });
    } else {
      const savedAgrarian = new Agrarian({
        name,
        province,
        district,
        municipalcouncil,
        city,
        username,
        password: encryptedPassword,
      });
      await savedAgrarian.save();
      if (!savedAgrarian) {
        res
          .status(500)
          .send({
            status: "error",
            error: "Failed to create agrarian service center",
          });
      }

      res
        .status(201)
        .send({
          status: "success",
          message: "Agrarian service center created successfully",
        });
    }
  } catch (error) {
    console.error("Error creating user:", error.message);
    res.status(500).send({ status: "error", error: error.message });
  }
});

//get all agrarian service centers
router.get("/get", async (req, res) => {
  try {
    const agrarian = await Agrarian.find();
    res.json(agrarian);
  } catch (error) {
    res.json({ message: error });
  }
});

//delete agrarian service center by ID
router.delete("/deleteASC/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const deletedASC = await Agrarian.findByIdAndDelete(id);

    if (!deletedASC) {
      return res.status(404).json({ error: "Admin not found" });
    }
    console.log("Deleted ASC:", deletedASC);
    res.json({ message: "ASC deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
