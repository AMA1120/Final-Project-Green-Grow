const env = require("dotenv").config();

const accountSid = process.env.TWILIO_ACCOUNT_SID || "AC9984dbee99c521f38ac660dedc82fb73";
const authToken = process.env.TWILIO_AUTH_TOKEN || "725b12a2c3628cdd2bd5ee05ae462f04";
const client = require("twilio")(accountSid, authToken);


const sendSMS = async (message, number) => {
  try {
    await client.messages.create({
      body: message,
      from: "+15089067284",
      to: number,
    });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

module.exports = sendSMS;





