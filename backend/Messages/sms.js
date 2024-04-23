const env = require("dotenv").config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
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

