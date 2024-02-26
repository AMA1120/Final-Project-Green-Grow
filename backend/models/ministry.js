const pkg = require("mongoose");
const { Schema, model, models } = pkg;

const MinistrySchema = new Schema({
  role: {
    type: String,
    default: "Ministry",
  },
  fullName: {
    type: String,
    required: [true, "Please provide a name"],
  },
  email: {
    type: String,
    required: [true, "Please provide an email"],
  },
  position: {
    type: String,
    required: [true, "Please provide a position"],
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

const Ministry = models.MinistryOfficers || model("MinistryOfficers", MinistrySchema);

module.exports = Ministry;

