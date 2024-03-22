const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Articles = require("../models/article");
const env = require("dotenv").config();

router.post("/addArticle", async (req, res) => {
    const { title, content, image, category } = req.body;
    try {
        const savedArticle = new Articles({
        title,
        content,
        image,
        category,
        });
        await savedArticle.save();
        if (!savedArticle) {
        res.status(500).send({
            status: "error",
            error: "Failed to create article",
        });
        }
        res.status(201).send({
        status: "success",
        message: "Article created successfully",
        });
    } catch (error) {
        console.error("Error creating article:", error.message);
        res.status(500).send({ status: "error", error: error.message });
    }
    });

    // Fetch all articles
    router.get("/getArticles", async (req, res) => {
        try {
            const articles = await Articles.find();
            res.json(articles);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Internal Server Error" });
        }
    });

    // Fetch Article by ID
    router.get("/getArticle/:id", async (req, res) => {
        const id = req.params.id;
        try {
            const article = await Articles.findById(id);
            res.json(article);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Internal Server Error" });
        }
    });

    // Update Article by ID
    router.put("/updateArticle/:id", async (req, res) => {
        const id = req.params.id;
        const { title, content, image, category } = req.body;
        try {
            const updatedArticle = await Articles.findByIdAndUpdate(
            id,
            {
                title,
                content,
                image,
                category,
            },
            { new: true }
            );
            res.json(updatedArticle);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Internal Server Error" });
        }
    });

    // Delete Article by ID
    router.delete("/deleteArticle/:id", async (req, res) => {
        const id = req.params.id;
        try {
            const deletedArticle = await Articles.findByIdAndDelete(id);
            res.json(deletedArticle);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Internal Server Error" });
        }
    });

module.exports = router;