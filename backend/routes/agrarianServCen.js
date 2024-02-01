const express = require("express");
const Agrarian = require("../models/agrarianServCen");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const env = require("dotenv").config();


router.post("/add", async (req, res) => {
 const {name, province, district, municipalcouncil, city, username, password} = req.body;
 const encryptedPassword = await bcrypt.hash(password, 10);
 try{
    const oldAgrarian = await Agrarian.findOne({username});
    if(oldAgrarian){
        res.status(403).send({error: "User Exists"});
 }else{
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
    if(savedAgrarian){
        const token = jwt.sign({username: savedAgrarian.username}, JWT_SECRET);
    }
    res.send({status: "ok"});
 }
} catch(error){
    console.error("Error creating user:", error.message);
    res.status(500).send({status: "error", error: error.message});
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

//delete agrarian service center
router.delete("/deleteASC", async (req, res) => { 
    const { username } = req.body;
    
    try {
      const deletedASC = await User.findOneAndDelete({ username });
      
      if (deletedASC) {
        res.json({ success: true, message: 'User deleted successfully.' });
      } else {
        res.json({ error: "User not found or already deleted." });
      }
    } catch (error) {
      console.error("Error deleting user:", error.message);
      res.status(500).json({ status: "error", error: error.message });
    }
  });
  
module.exports = router;