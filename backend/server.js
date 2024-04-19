const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./db/conn");

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


// Import Routes
const ministryRoute = require("./routes/ministry");
const agrarianRoute = require("./routes/agrarianServCen");
const farmersOrgRoute = require("./routes/farmersOrg");
const farmersRoute = require("./routes/farmers");
const ArticleRoute = require("./routes/article");
const fertilizerDeliveryRoute = require("./routes/fertilizerdelivery");
const messageRoute = require("./routes/messages");
const communityRoute = require("./routes/community");

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


app.listen(port, async () => {
  try {
    await connectDB();
    console.log(`Server is running on port: ${port}`);
  } catch (error) {
    console.log(error);
  }
});
