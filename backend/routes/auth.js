const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

// Admin credentials
const ADMIN_USERNAME = "Prem Kumar";
const ADMIN_PASSWORD = "Prem@123";
const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key-change-in-production";

// Login route
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    // Validate credentials
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      // Generate JWT token
      const token = jwt.sign(
        { username: ADMIN_USERNAME, role: "admin" },
        JWT_SECRET,
        { expiresIn: "24h" }
      );

      res.json({
        success: true,
        token: token,
        message: "Login successful"
      });
    } else {
      res.status(401).json({
        success: false,
        message: "Invalid username or password"
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

// Verify token route (for frontend to check if token is still valid)
router.get("/verify", (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1]; // Bearer <token>

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "No token provided"
      });
    }

    // Verify token
    const decoded = jwt.verify(token, JWT_SECRET);

    res.json({
      success: true,
      user: decoded
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "Invalid or expired token"
    });
  }
});

// Logout route (client-side token removal, but included for completeness)
router.post("/logout", (req, res) => {
  res.json({
    success: true,
    message: "Logout successful"
  });
});

module.exports = router;

