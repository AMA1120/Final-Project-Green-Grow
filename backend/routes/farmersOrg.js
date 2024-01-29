const express = require("express");
const oraganization = require("../models/farmersOrg");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const env = require("dotenv").config();

router.post("/add", async (req, res) => {
    const {orgname, district, municipalcouncil, city, username, password} = req.body;
    const encryptedPassword = await bcrypt.hash(password, 10);
    try{
        const oldoraganization = await oraganization.findOne({username});
        if(oldoraganization){
            res.status(403).send({error: "User Exists"});
    }else{
        const savedoraganization = new oraganization({
            orgname,
            district,
            municipalcouncil,
            city,
            username,
            password: encryptedPassword,
        });
        await savedoraganization.save();
        if(savedoraganization){
            const token = jwt.sign({username: savedoraganization.username}, JWT_SECRET);
        }
        res.send({status: "ok"});
    }
}catch(error){
    console.error("Error creating user:", error.message);
    res.status(500).send({status: "error", error: error.message});
}
});

module.exports = router;