const pkg = require("mongoose");
const { Schema, model, models } = pkg;

const Farmer = new Schema({
  name: {
    type: String,
    required: [true, "Please provide a name"],
  },
  NIC: {
    type: String,
    required: [true, "Please provide a NIC"],
  },
  DOB: {
    type: String,
    required: [true, "Please provide a DOB"],
  },
  address: {
    type: String,
    required: [true, "Please provide an address"],
  },
  phone: {
    type: String,
    required: [true, "Please provide a phone number"],
  },
  farmlandSize: {
    type: String,
    required: [true, "Please provide a farmland size"],
  },
  farmlandLocation: {
    type: String,
    required: [true, "Please provide a farmland location"],
  },
  landRegNo: {
    type: String,
    required: [true, "Please provide a land registration number"],
  },
  username: {
    type: String,
    required: [true, "Please provide a username"],
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
  },
});

const Farmers = models.Farmers || model("Farmers", Farmer);

module.exports = Farmers;
