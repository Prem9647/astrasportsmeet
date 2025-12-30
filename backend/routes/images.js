const express = require("express");
const router = express.Router();
const multer = require("multer");
const Image = require("../models/Image");
const { uploadToS3 } = require("../utils/s3Upload");

// Configure multer to use memory storage (we'll upload directly to S3)
const upload = multer({ 
  storage: multer.memoryStorage(), // Store file in memory instead of disk
  limits: {
    fileSize: 10 * 1024 * 1024 // 10MB limit
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

// Public route to get all images
router.get("/", async (req, res) => {
  try {
    const { category } = req.query;
    const query = category ? { category } : {};
    
    const images = await Image.find(query).sort({ timestamp: -1 }); // Sort by newest first
    res.json(images);
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: error.message 
    });
  }
});

// Public route to get a single image by ID
router.get("/:id", async (req, res) => {
  try {
    const image = await Image.findById(req.params.id);
    
    if (!image) {
      return res.status(404).json({ 
        success: false, 
        message: 'Image not found' 
      });
    }
    
    res.json(image);
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: error.message 
    });
  }
});

module.exports = router;

