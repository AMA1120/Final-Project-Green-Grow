const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const connectDB = async () => {
  const databaseName = process.env.NODE_ENV === "dev" ? "green-grow-dev" : "green-grow-test"
  try {
    console.log(databaseName)

    await mongoose.connect(process.env.MONGO_URI, {
      dbName: databaseName,
    });
    console.log("Database Connected");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = connectDB;
