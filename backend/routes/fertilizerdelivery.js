const express = require("express");
const router = express.Router();
const FertilizerDeliveries = require("../models/fertilizerdelivery");
const env = require("dotenv").config();

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

// Route to update the delivery status of a fertilizer delivery
router.put("/updateministry/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // Find the document by ID and update its status
    const updatedDelivery = await FertilizerDeliveries.findByIdAndUpdate(id, {
      status: 1,
    });

    const savedDelivery = await FertilizerDeliveries.findById(id);

    if (updatedDelivery) {
      res.status(200).json({
        message: "Delivery status updated successfully.",
        savedDelivery,
      });
    } else {
      res.status(404).json({ message: "Delivery not found." });
    }
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
