const pkg = require("mongoose");
const { Schema, model, models } = pkg;

const FarmersOrganization = new Schema({
  role: {
    type: String,
    default: "FarmersOrg",
  },
  orgname: {
    type: String,
    required: [true, "Please provide a organization name"],
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

const FarmersOrg =
  models.FarmersOrg || model("FarmersOrg", FarmersOrganization);

module.exports = FarmersOrg;
