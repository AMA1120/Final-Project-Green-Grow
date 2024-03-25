const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const FarmersOrg = require("../models/farmersOrg");
const env = require("dotenv").config();

router.post("/add", async (req, res) => {
  const { orgname, district, municipalcouncil, city, username, password } =
    req.body;
  const encryptedPassword = await bcrypt.hash(password, 10);
  try {
    const oldorganization = await FarmersOrg.findOne({ username });
    if (oldorganization) {
      res.status(403).send({ error: "User Exists" });
    } else {
      const savedorganization = new FarmersOrg({
        orgname,
        district,
        municipalcouncil,
        city,
        username,
        password: encryptedPassword,
      });

      await savedorganization.save();
      if (!savedorganization) {
        res.status(500).send({
          status: "error",
          error: "Failed to create farmers' organization",
        });
      }
      res.status(201).send({
        status: "success",
        message: "Farmers' organization created successfully",
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

  const organization = await FarmersOrg.findOne({ username });
  if (!organization) {
    return res.status(404).json({ error: "Farmers' organization not found" });
  }

  if (await bcrypt.compare(password, organization.password)) {
    const token = jwt.sign(
      { userId: organization._id, role: organization.role },
      process.env.JWT_SECRET
    );
    res.status(200).send({ token });

    // res.status(200).send(organization);
  } else {
    res.status(401).json({ error: "Incorrect password" });
  }
});

//get all farmers' organizations
router.get("/get", async (req, res) => {
  try {
    const organization = await FarmersOrg.find();
    res.json(organization);
  } catch (error) {
    res.json({ message: error });
  }
});

//delete a farmers' organization

router.delete("/deleteFO/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const removedorganization = await FarmersOrg.findByIdAndDelete(id);

    if (!removedorganization) {
      return res.status(404).send({ error: "organization not found" });
    }
    console.log("Deleted organization:", removedorganization);
    res.json({ message: "organization deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

// Authenticate user
router.get("/protected", async (req, res) => {
  try {
    const authHeader = await req.headers.authorization;
    // console.log(authHeader);
    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // console.log(decoded.userId);
    if (!decoded) {
      return res.status(400).json({ message: "Expired. Unauthorized" });
    } else if (decoded.exp < Date.now() / 1000) {
      return res.status(400).json({ message: "Expired. Unauthorized" });
    } else {
      // If the token is valid, return some protected data
      return res.status(200).json({ data: "Protected data" });
    }
  } catch (error) {
    console.log("Token Verification Error: ", error);
    return res.status(400).json({ message: "Unauthorized" });
  }
});

module.exports = router;
