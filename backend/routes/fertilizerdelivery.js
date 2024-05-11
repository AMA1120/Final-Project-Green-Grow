const express = require("express");
const router = express.Router();
const FertilizerDeliveries = require("../models/fertilizerdelivery");
const env = require("dotenv").config();
const sendSMS = require("../Messages/sms");



// Route to add a new fertilizer delivery
router.post("/add", async (req, res) => {
  try {
    const { fertilizerName, quantity, deliveryDate } = req.body;

    // Create a new delivery document
    const newDelivery = new FertilizerDeliveries({
      fertilizerName,
      quantity,
      deliveryDate,
    });

    // Save the document
    const delivery = await newDelivery.save();

    res.json({ message: "Delivery added successfully.", delivery });
  } catch (error) {
    res.status(500).json({ message: "Error adding delivery", error });
  }
});

// Route to update pending to ministry by ministry admin
router.put("/updateministry/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // Update status to Ministry (1) and increment ministryUpdateCount
    await FertilizerDeliveries.findByIdAndUpdate(id, { status: 1 });

    // Fetch the updated delivery
    const updatedDelivery = await FertilizerDeliveries.findById(id);

    res.status(200).json({
      message:
        "Delivery status updated successfully to Ministry by Ministry admin.",
      updatedDelivery,
    });
  } catch (error) {
    res.status(500).json({ message: "Error updating status", error });
  }
});

// Route to update ministry to asc by ASC admin
router.put("/updateasc/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // Update status to ASC (2) and increment ascUpdateCount
    await FertilizerDeliveries.findByIdAndUpdate(id, { status: 2 });

    await sendSMS(
      "Hi, All fertilizer deliveries are complete. Now you can collect your fertilizer from the nearest center. Thank you!",
      "+94772057454"
    );

    res.status(200).json({
      message: "Delivery status updated successfully to ASC by ASC admin.",
      updatedDelivery,
    });
  } catch (error) {
    res.status(500).json({ message: "Error updating status", error });
  }
});

// Route to get all fertilizer deliveries
router.get("/get", async (req, res) => {
  try {
    const deliveries = await FertilizerDeliveries.find();
    res.json(deliveries);
  } catch (error) {
    res.status(500).json({ message: "Error fetching deliveries", error });
  }
});

module.exports = router;
