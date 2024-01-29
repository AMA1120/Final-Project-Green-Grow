const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "green-grow-dev",
    });
    console.log("Database Connected");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = connectDB;
