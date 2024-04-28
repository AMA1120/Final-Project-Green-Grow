const express = require("express");
const Ministry = require("../models/ministry");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();


router.post("/add", async (req, res) => {
  const { fullName, email, position, username, password } = req.body;
  const encryptedPassword = await bcrypt.hash(password, 10);
  try {
    const oldMinistry = await Ministry.findOne({ username });
    if (oldMinistry) {
      res.status(403).send({ error: "User Exists" });
    } else {
      const savedMinistry = new Ministry({
        fullName,
        email,
        position,
        username,
        password: encryptedPassword,
      });
      await savedMinistry.save();
      if (savedMinistry) {
        const token = jwt.sign(
          { username: savedMinistry.username },
          process.env.JWT_SECRET
        );
      }
      res.send({ status: "ok" });
    }
  } catch (error) {
    console.error("Error creating user:", error.message);
    res.status(500).send({ status: "error", error: error.message });
  }
});

//login route
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const ministry = await Ministry.findOne({ username });
  if (!ministry) {
    return res.status(404).json({ error: "Ministry not found" });
  }
  if (await bcrypt.compare(password, ministry.password)) {
    const token = jwt.sign(
      {
        username: ministry.username,
        userID: ministry._id,
        role: ministry.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn:"10m",
      }
    );
    return res.status(200).json({ token });
  } else {
    return res.status(403).json({ error: "Wrong password" });
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
