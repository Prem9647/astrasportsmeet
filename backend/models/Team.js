const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({
  name: { type: String, required: true },
  gold: { type: Number, default: 0 },
  silver: { type: Number, default: 0 },
  bronze: { type: Number, default: 0 },
  bonus: { type: Number, default: 0 },
  total: { type: Number, default: 0 }
});

module.exports = mongoose.model("Team", teamSchema);