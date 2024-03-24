const pkg = require("mongoose");
const { Schema, model, models } = pkg;

const FertilizerDelivery = new Schema({
    fertilizerName: {
        type: String,
        required: [true, "Please provide a fertilizer name"],
    },
    quantity: {
        type: Number,
        required: [true, "Please provide quantity"],
    },
    deliveryDate: {
        type: Date,
        required: [true, "Please provide a delivery date"],
    },
    status: {
        type: String,
        required: [true, "Please provide a status"],
    },
});

const FertilizerDeliveries = models.FertilizerDeliveries || model("FertilizerDeliveries", FertilizerDelivery);

module.exports = FertilizerDeliveries;