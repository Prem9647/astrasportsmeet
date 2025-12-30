const express = require("express");
const router = express.Router();
const Team = require("../models/Team");
const calculatePoints = require("../utils/pointsCalculator");

// Public route to get all teams with calculated points
router.get("/", async (req, res) => {
  try {
    const teams = await Team.find();

    const result = teams.map(team => ({
      ...team._doc,
      points: calculatePoints(team)
    }));

    res.json(result);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

module.exports = router;

