const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema({
  player1: String,
  player2: String
});

const eventSchema = new mongoose.Schema({
  eventId: { type: String, unique: true }, // "throwball"
  title: { type: String, required: true, immutable: true },
  description: { type: String, immutable: true },
  type: { type: String, immutable: true },
  category: { type: String, immutable: true },

  // Editable fields
  timing: String,
  venue: String,
  image: String,
  players: [playerSchema]
});

module.exports = mongoose.model("Event", eventSchema);
