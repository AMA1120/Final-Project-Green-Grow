const express = require("express");
const router = express.Router();
const Message = require("../models/messages");
const mongoose = require("mongoose");
const env = require("dotenv").config();
const twilio = require("twilio");

// Route to submit a new message
router.post("/submit", async (req, res) => {
  const { problemType, message } = await req.body;
  try {
    const newMessage = new Message({
      problemType,
      message,
    });
    await newMessage.save();
    console.log(newMessage);
    res.send(newMessage).status(201);
  } catch (error) {
    console.error(error);
  }
});

// Route to get all messages
router.get("/get", async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (error) {
    console.error("Error fetching messages:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Route to send SMS

router.post("/send-sms", async (req, res) => {
  const { message, number } = req.body;
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const client = new twilio(accountSid, authToken);
  try {
    await client.messages.create({
      body: message,
      from: "+15089067284",
      to: number,
    });
    res.send("SMS sent successfully").status(200);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Route to update message status

router.put("/update-status/:id", async (req, res) => {

  try {
    const { id } = req.params;

    // Update status to send message (1)
    await Message.findByIdAndUpdate(id, { check: 1 });

    // Fetch the updated message
    const updatedMessage = await Message.findById(id);

    res.status(200).json({
      message: "Message status updated successfully by Admin.",
      updatedMessage,
    });
  } catch (error) {
    res.status(500).json({ message: "Error updating status", error });
  }
});

module.exports = router;
