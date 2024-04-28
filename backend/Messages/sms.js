const env = require("dotenv").config();

const accountSid = process.env.TWILIO_ACCOUNT_SID || "AC77d3fb36ea2c35ab0e897310ef16467d";
const authToken = process.env.TWILIO_AUTH_TOKEN || "7c71fd33fb6e5b1551bc9d72e604ac86";
const client = require("twilio")(accountSid, authToken);


const sendSMS = async (message, number) => {
  try {
    await client.messages.create({
      body: message,
      from: "+12177172121",
      to: number,
    });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

module.exports = sendSMS;

