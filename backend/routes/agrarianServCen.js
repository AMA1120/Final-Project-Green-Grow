const express = require("express");
const Agrarian = require("../models/agrarianServCen");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const env = require("dotenv").config();


router.post("/add", async (req, res) => {
 const {province, district, municipalcouncil, city, username, password} = req.body;
 const encryptedPassword = await bcrypt.hash(password, 10);
 try{
    const oldAgrarian = await Agrarian.findOne({username});
    if(oldAgrarian){
        res.status(403).send({error: "User Exists"});
 }else{
    const savedAgrarian = new Agrarian({
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

module.exports = router;