const express = require("express");
const Articles = require("../models/article");
const mongoose = require("mongoose");
const env = require("dotenv").config();

const router = express.Router();

router.post("/add", async (req, res) => {
    const { title, content, image, category } = await req.body;
    try {
        const savedArticle = new Articles({
        title,
        content,
        image,
        category,
        });
        await savedArticle.save();
        console.log(savedArticle);
        res.send(savedArticle).status(201);
    } catch (error) {
        console.log(error);

    }
});

    // Fetch all articles
    router.get("/get", async (req, res) => {
        try {
            const articles = await Articles.find();
            res.json(articles);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Internal Server Error" });
        }
    });

    // // Update Article by ID
    // router.put("/updateArticle/:id", async (req, res) => {
    //     const id = req.params.id;
    //     const { title, content, image, category } = req.body;
    //     try {
    //         const updatedArticle = await Articles.findByIdAndUpdate(
    //         id,
    //         {
    //             title,
    //             content,
    //             image,
    //             category,
    //         },
    //         { new: true }
    //         );
    //         if (!updatedArticle) {
    //         return res.status(404).json({ error: "Article not found" });
    //     }
    //     console.log("Updated Article:", updatedArticle);
    //     res.json(updatedArticle);
    // } catch (error) {
    //     res.status(500).json({ message: "Internal Server Error" });
    // }
    // });

    // Fetch Article by ID
    router.get("/getArticle/:id", async (req, res) => {
        const id = req.params.id;
        try {
            const existingArticle = await Articles.findById(id);
            
         if (!existingArticle) {
            return res.status(404).json({ error: "Article not found" });
        }
        console.log("Existing Article:", existingArticle);
        res.json(existingArticle);

    } catch (error) {  
        res.status(500).json({ message: "Internal Server Error" });
    }
    });


    // Delete Article by ID
    router.delete("/deleteArticle/:id", async (req, res) => {
        const id = req.params.id;
        try {
            const deletedArticle = await Articles.findByIdAndDelete(id);

        if (!deletedArticle) {
            return res.status(404).json({ error: "Article not found" });
        }
        console.log("Deleted Article:", deletedArticle);
        res.json({message: "Article deleted successfully"});
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
    
    });

module.exports = router;