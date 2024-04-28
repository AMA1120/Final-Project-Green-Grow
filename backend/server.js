const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const connectDB = require("./db/conn");
const app = require("./app");
const http = require("http");

// Create an HTTP server using the app
const server = http.createServer(app);

dotenv.config();
const port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI);

server.listen(port, async () => {
  try {
    await connectDB();
    console.log(`Server is running on port: ${port}`);
  } catch (error) {
    console.log(error);
  }
});

module.exports = server;
