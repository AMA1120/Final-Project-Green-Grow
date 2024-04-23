const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./db/conn");
const twilio = require('twilio');

// Import middleware
const myMiddleware = require('./middleware/middleware');

// Import models
const Ministry = require("./models/ministry");
const AgrarianServiceCenter = require("./models/agrarianServCen");
const FarmersOrganization = require("./models/farmersOrg");
const Farmers = require("./models/farmers");
const Article = require("./models/article");
const FertilizerDeliveries = require("./models/fertilizerdelivery");
const Message = require("./models/messages");
const Question = require("./models/community");
const Answer = require("./models/answers");

// Import routes
const ministryRoute = require('./routes/ministry');
const agrarianRoute = require('./routes/agrarianServCen');
const farmersOrgRoute = require('./routes/farmersOrg');
const farmersRoute = require('./routes/farmers');
const ArticleRoute = require('./routes/article');
const fertilizerDeliveryRoute = require('./routes/fertilizerdelivery');
const messageRoute = require('./routes/messages');
const communityRoute = require('./routes/community');


dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI);

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// Apply middleware
app.use(myMiddleware);

// app middleware
app.use(bodyParser.json({ limit: "50mb" }));

app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
  })
);

// Initialize Twilio
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;
const client = twilio(accountSid, authToken, twilioPhoneNumber);

// route middleware
app.use('/ministry', ministryRoute);
app.use('/agrarian', agrarianRoute);
app.use('/farmersOrg', farmersOrgRoute);
app.use('/farmers', farmersRoute);
app.use('/article', ArticleRoute);
app.use('/fertilizerdelivery', fertilizerDeliveryRoute);
app.use('/messages', messageRoute);
app.use('/community', communityRoute);
app.use('/community/answer', communityRoute);
app.use('/community/getAnswers', communityRoute);

// Send SMS using Twilio
const sendSMS = async (recipientPhoneNumber, message) => {
  try {
    await client.messages.create({
      body: message,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: recipientPhoneNumber,
    });
    console.log('SMS sent successfully');
  } catch (error) {
    console.error('Error sending SMS:', error);
  }
};

// Send SMS when all fertilizer deliveries are complete
const sendSMSForFertilizerDelivery = async () => {
  try {
    const message = 'Hi, All fertilizer deliveries are complete. Now you can collect your fertilizer from the nearest center. Thank you!';
    const recipientPhoneNumber = '+94769413257'; 
    await sendSMS(recipientPhoneNumber, message);
  } catch (error) {
    console.error('Error sending SMS for fertilizer delivery:', error);
  }
};

// Schedule sending SMS for fertilizer delivery status 2 every day at midnight
setInterval(sendSMSForFertilizerDelivery, 1000 * 60 * 60 * 24);

// Example: Send SMS when fertilizer delivery status is 2
app.post('/send-sms', async (req, res) => {
  try {
    const { recipientPhoneNumber, message } = req.body;
    await sendSMS(recipientPhoneNumber, message);
    res.status(200).json({ message: 'SMS sent successfully' });
  } catch (error) {
    console.error('Error sending SMS:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, async () => {
  try {
    await connectDB();
    console.log(`Server is running on port: ${port}`);
  } catch (error) {
    console.log(error);
  }
});
