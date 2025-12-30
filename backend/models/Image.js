const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  imageUrl: { 
    type: String, 
    required: true 
  },
  title: {
    type: String,
    default: ""
  },
  description: {
    type: String,
    default: ""
  },
  category: {
    type: String,
    enum: ['event', 'gallery', 'live', 'other'],
    default: 'gallery'
  },
  timestamp: { 
    type: Date, 
    default: Date.now 
  }
});

module.exports = mongoose.model("livephoto", imageSchema);

