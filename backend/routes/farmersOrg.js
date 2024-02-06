const express = require("express");
const Organization = require("../models/farmersOrg");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const env = require("dotenv").config();

router.post("/add", async (req, res) => {
  const { orgname, district, municipalcouncil, city, username, password } =
    req.body;
  const encryptedPassword = await bcrypt.hash(password, 10);
  try {
    const oldorganization = await Organization.findOne({ username });
    if (oldorganization) {
      res.status(403).send({ error: "User Exists" });
    } else {
      const savedorganization = new Organization({
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

//get all farmers' organizations
router.get("/get", async (req, res) => {
  try {
    const organization = await Organization.find();
    res.json(organization);
  } catch (error) {
    res.json({ message: error });
  }
});

//delete a farmers' organization

router.delete("/deleteFO/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const removedorganization = await Organization.findByIdAndDelete(id);
    
    if (!removedorganization) {
      return res.status(404).send({ error: "organization not found" });
    }
    console.log("Deleted organization:", removedorganization);
    res.json({ message: "organization deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
