const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Farmers = require("../models/farmers");
const env = require("dotenv").config();

router.post("/add", async (req, res) => {
  const {
    name,
    NIC,
    DOB,
    address,
    phone,
    farmlandSize,
    farmlandLocation,
    landRegNo,
    username,
    password,
  } = req.body;
  const encryptedPassword = await bcrypt.hash(password, 10);
  try {
    const oldFarmer = await Farmers.findOne({ username });
    if (oldFarmer) {
      res.status(403).send({ error: "User Exists" });
    } else {
      const savedFarmer = new Farmers({
        name,
        NIC,
        DOB,
        address,
        phone,
        farmlandSize,
        farmlandLocation,
        landRegNo,
        username,
        password: encryptedPassword,
      });
      await savedFarmer.save();
      if (!savedFarmer) {
        res.status(500).send({
          status: "error",
          error: "Failed to create farmer",
        });
      }
      res.status(201).send({
        status: "success",
        message: "Farmer created successfully",
      });
    }
  } catch (error) {
    console.error("Error creating user:", error.message);
    res.status(500).send({ status: "error", error: error.message });
  }
});

//login route
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const farmer = await Farmers.findOne({ username });
  if (!farmer) {
    return res.status(404).json({ error: "Farmer not found" });
  }
  if (await bcrypt.compare(password, farmer.password)) {
    const token = jwt.sign(
      { userId: farmer._id, role: farmer.role },
      process.env.JWT_SECRET, 
      {
        expiresIn: "20m",
      }
    );
    res.status(200).send({ token });
  } else {
    res.status(401).json({ error: "Incorrect password" });
  }
});

//get all farmers
router.get("/get", async (req, res) => {
  const farmers = await Farmers.find({});
  res.status(200).send(farmers);
});

//update farmer
router.put("/update", async (req, res) => {
  const {
    name,
    NIC,
    DOB,
    address,
    phone,
    farmlandSize,
    farmlandLocation,
    landRegNo,
  } = req.body;
  const updatedFarmer = await Farmers.findOneAndUpdate(
    { username: req.body.username },
    {
      name,
      NIC,
      DOB,
      address,
      phone,
      farmlandSize,
      farmlandLocation,
      landRegNo,
    },
    { new: true }
  );
  if (!updatedFarmer) {
    res.status(500).send({
      status: "error",
      error: "Failed to update farmer",
    });
  }
  res.status(200).send({
    status: "success",
    message: "Farmer updated successfully",
  });
});

module.exports = router;
