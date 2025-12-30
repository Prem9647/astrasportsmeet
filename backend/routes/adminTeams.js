const express = require("express");
const router = express.Router();
const Team = require("../models/Team");
const adminAuth = require("../middleware/adminAuth");

// Admin route to add point
router.post("/add-point", adminAuth, async (req, res) => {
  try {
    const { teamId, type } = req.body;

    await Team.findByIdAndUpdate(teamId, {
      $inc: { [type]: 1 }
    });

    res.json({ success: true });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

// Admin route to remove point
router.post("/remove-point", adminAuth, async (req, res) => {
  try {
    const { teamId, type } = req.body;

    // Decrement the point type but ensure it doesn't go below 0
    await Team.findByIdAndUpdate(teamId, {
      $inc: { [type]: -1 }
    });

    res.json({ success: true });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

// Admin route to reset points
router.post("/reset-points", adminAuth, async (req, res) => {
  try {
    const { teamId } = req.body;

    // Reset all point types to 0
    await Team.findByIdAndUpdate(teamId, {
      gold: 0,
      silver: 0,
      bronze: 0,
      bonus: 0
    });

    res.json({ success: true });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

// Admin route to add new team (dynamic teams)
router.post("/add-team", adminAuth, async (req, res) => {
  try {
    const { name } = req.body;
    await Team.create({ name });
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

module.exports = router;

