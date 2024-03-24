const express = require('express');
const router = express.Router();
const FertilizerDeliveries = require('../models/fertilizerdelivery');
const env = require("dotenv").config();

// Route to update the delivery status of a fertilizer delivery
router.post('/update-delivery-status', async (req, res) => {
  try {
    const { id, status } = req.body;

    // Find the document by ID and update its status
    const updatedDelivery = await FertilizerDeliveries.findByIdAndUpdate(
      id,
      { status: status },
      { new: true } // This option returns the updated document
    );

    if (updatedDelivery) {
      res.json({ message: 'Delivery status updated successfully.', updatedDelivery });
    } else {
      res.status(404).json({ message: 'Delivery not found.' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updating status', error });
  }
});

module.exports = router;
