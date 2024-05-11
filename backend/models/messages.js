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
  check: {
    type: String,
    default: 0, // 0: check, 1: message sent
  },
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
