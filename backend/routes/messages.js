const express = require('express');
const router = express.Router();
const Message = require('../models/messages');
const mongoose = require("mongoose");
const env = require("dotenv").config();
const twilio = require("twilio");



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

// Route to send SMS

router.post('/send-sms', async (req, res) => {
  const { message, number } = req.body;
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const client = new twilio(accountSid, authToken);
  try {
    await client.messages.create({
      body: message,
      from: "+12177172121",
      to: number,
    });
    res.send("SMS sent successfully").status(200);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
