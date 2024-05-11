const { Vonage } = require("@vonage/server-sdk");

const vonage = new Vonage({
  apiKey: "17dd05a2",
  apiSecret: "30trRo4kpsfF2lBf",
});
const from = "Green Grow";

async function sendSMS(text, to) {
  await vonage.sms
    .send({ to, from, text })
    .then((resp) => {
      console.log("Message sent successfully");
      console.log(resp);
    })
    .catch((err) => {
      console.log("There was an error sending the messages.");
      console.error(err);
    });
}

module.exports = sendSMS;

// sendSMS();
