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

// Route to update the delivery status of a fertilizer delivery by ministry admin
router.put("/updateministry/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // Find the document by ID
    const delivery = await FertilizerDeliveries.findById(id);

    if (!delivery) {
      return res.status(404).json({ message: "Delivery not found." });
    }

    if (delivery.status === 2) {
      return res.status(400).json({ message: "Delivery status already ASC." });
    }

    if (delivery.status !== 1) {
      return res.status(400).json({ message: "Invalid status for update." });
    }

    if (delivery.ministryUpdateCount >= 1) {
      return res.status(400).json({ message: "Ministry admin already updated the status." });
    }

    // Update status to ASC (2) and increment ministryUpdateCount
    await FertilizerDeliveries.findByIdAndUpdate(id, { status: 2, ministryUpdateCount: 1 });

    // Fetch the updated delivery
    const updatedDelivery = await FertilizerDeliveries.findById(id);

    res.status(200).json({
      message: "Delivery status updated successfully to ASC by ministry admin.",
      updatedDelivery,
    });
  } catch (error) {
    res.status(500).json({ message: "Error updating status", error });
  }
});

// Route to update the delivery status of a fertilizer delivery by ASC admin
router.put("/updateasc/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // Find the document by ID
    const delivery = await FertilizerDeliveries.findById(id);

    if (!delivery) {
      return res.status(404).json({ message: "Delivery not found." });
    }

    if (delivery.status === 2) {
      return res.status(400).json({ message: "Delivery status already ASC." });
    }

    if (delivery.status !== 1) {
      return res.status(400).json({ message: "Invalid status for update." });
    }

    if (delivery.ascUpdateCount >= 1) {
      return res.status(400).json({ message: "ASC admin already updated the status." });
    }

    // Update status to ASC (2) and increment ascUpdateCount
    await FertilizerDeliveries.findByIdAndUpdate(id, { status: 2, ascUpdateCount: 1 });

    // Fetch the updated delivery
    const updatedDelivery = await FertilizerDeliveries.findById(id);

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
