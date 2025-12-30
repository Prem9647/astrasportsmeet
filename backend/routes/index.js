const express = require("express");
const router = express.Router();

// Health check route
router.get("/", (req, res) => {
  res.send("API is running...");
});

module.exports = router;

