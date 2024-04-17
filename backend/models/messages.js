const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  problemType: {
    type: String,
    required: [true, 'Please provide a problem type'],
  },
  message: {
    type: String,
    required: [true, 'Please provide a message'],
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  // Image: {
  //   type: String,
  //   required: [true, 'Please provide an image'],
  // }
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
