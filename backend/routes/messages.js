const express = require('express');
const router = express.Router();
const Message = require('../models/messages');
const mongoose = require("mongoose");
const env = require("dotenv").config();

// Route to submit a new message
router.post('/submit', async (req, res) => {
  const { problemType, message } = await req.body;
  try {
    const newMessage = new Message({
      problemType,
      message
    });
    await newMessage.save();
    console.log(newMessage);
    res.send(newMessage).status(201);
  } catch (error) {
    console.error(error);
  }
});

// Route to get all messages
router.get('/get', async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (error) {
    console.error('Error fetching messages:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
