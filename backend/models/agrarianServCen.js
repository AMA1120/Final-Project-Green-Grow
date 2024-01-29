const pkg = require("mongoose");
const { Schema, model, models } = pkg;

const AgrarianServiceCenterSchema = new Schema({
  province: {
    type: String,
    required: [true, "Please provide a province"],
  },
  district: {
    type: String,
    required: [true, "Please provide a district"],
  },
  municipalcouncil: {
    type: String,
    required: [true, "Please provide a municipal council"],
  },
  city: {
    type: String,
    required: [true, "Please provide a city"],
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

const AgrarianServCen =
  models.AgrarianServiceCenter ||
  model("AgrarianServiceCenter", AgrarianServiceCenterSchema);

module.exports = AgrarianServCen;
