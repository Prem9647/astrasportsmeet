const express = require("express");
const router = express.Router();
const multer = require("multer");
const LivePhoto = require("../models/LivePhoto");
const adminAuth = require("../middleware/adminAuth");
const { uploadToS3 } = require("../utils/s3Upload");

// Configure multer to use memory storage (we'll upload directly to S3)
const upload = multer({ 
  storage: multer.memoryStorage(), // Store file in memory instead of disk
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB limit
  },
  fileFilter: (req, file, cb) => {
    // Allow only image files
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed!'), false);
    }
  }
});

// Admin route to upload live photo
router.post("/upload-photo", adminAuth, upload.single("photo"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ 
        success: false, 
        message: 'No photo uploaded' 
      });
    }

    // Upload file to S3
    const s3Url = await uploadToS3(
      req.file.buffer,
      req.file.originalname,
      req.file.mimetype,
      'live-photos'
    );

    // Create new live photo document with S3 URL
    const livePhoto = new LivePhoto({
      imageUrl: s3Url
    });

    const savedPhoto = await livePhoto.save();
    res.json({ 
      success: true, 
      photo: savedPhoto 
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: error.message 
    });
  }
});

// Public route to get all live photos (for users)
router.get("/live-photos", async (req, res) => {
  try {
    const photos = await LivePhoto.find().sort({ timestamp: -1 }); // Sort by newest first
    res.json(photos);
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: error.message 
    });
  }
});

module.exports = router;