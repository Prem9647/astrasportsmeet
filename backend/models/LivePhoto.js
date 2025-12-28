const mongoose = require("mongoose");

const livePhotoSchema = new mongoose.Schema({
  imageUrl: { 
    type: String, 
    required: true 
  },
  timestamp: { 
    type: Date, 
    default: Date.now 
  }
});

module.exports = mongoose.model("LivePhoto", livePhotoSchema);