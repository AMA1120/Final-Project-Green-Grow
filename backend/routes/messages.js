const express = require('express');
const router = express.Router();
const Message = require('../models/messages');

// Route to submit a new message
router.post('/submit', async (req, res) => {
  try {
    const { problemType, message } = req.body;
    const newMessage = new Message({
      problemType,
      message
    });
    await newMessage.save();
    res.status(201).json({ message: 'Message submitted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to get all messages
router.get('/get', async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
