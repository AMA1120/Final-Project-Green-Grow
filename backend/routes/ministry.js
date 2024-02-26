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
      process.env.JWT_SECRET
    );
    return res.status(200).json({ token });
  } else {
    return res.status(403).json({ error: "Wrong password" });
  }
});

module.exports = router;
