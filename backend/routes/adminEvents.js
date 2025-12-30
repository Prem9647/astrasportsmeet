const express = require("express");
const router = express.Router();
const Event = require("../models/Event");
const adminAuth = require("../middleware/adminAuth");

// Admin route to add event
router.post("/events", adminAuth, async (req, res) => {
  try {
    const event = await Event.create(req.body);
    res.json(event);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

// Admin route to update event
router.put("/events/:id", adminAuth, async (req, res) => {
  try {
    console.log("Check");
    const updated = await Event.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

// Admin route to delete event
router.delete("/events/:id", adminAuth, async (req, res) => {
  try {
    await Event.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

module.exports = router;
