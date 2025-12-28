const express = require("express");
const router = express.Router();
const Event = require("../models/Event");
const adminAuth = require("../middleware/adminAuth");

// Admin route to update only the players array of an event
router.put("/events/:id/players", adminAuth, async (req, res) => {
  try {
    const { players } = req.body;
    
    // Validate that only players array is being updated
    if (!Array.isArray(players)) {
      return res.status(400).json({ 
        success: false, 
        message: 'Players must be an array' 
      });
    }

    // Update only the players field
    const updatedEvent = await Event.findByIdAndUpdate(
      req.params.id,
      { players },
      { new: true }
    );

    if (!updatedEvent) {
      return res.status(404).json({ 
        success: false, 
        message: 'Event not found' 
      });
    }

    res.json(updatedEvent);
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: error.message 
    });
  }
});

module.exports = router;