const express = require("express");
const router = express.Router();
const multer = require("multer");
const Image = require("../models/Image");
const adminAuth = require("../middleware/adminAuth");
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

// Admin route to upload image
router.post("/upload", adminAuth, upload.single("image"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ 
        success: false, 
        message: 'No image uploaded' 
      });
    }

    // Upload file to S3
    const s3Url = await uploadToS3(
      req.file.buffer,
      req.file.originalname,
      req.file.mimetype,
      'gallery-images'
    );

    // Create new image document with S3 URL
    const image = new Image({
      imageUrl: s3Url,
      title: req.body.title || "",
      description: req.body.description || "",
      category: req.body.category || 'gallery'
    });

    const savedImage = await image.save();
    res.json({ 
      success: true, 
      image: savedImage 
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: error.message 
    });
  }
});

// Admin route to get all images
router.get("/", adminAuth, async (req, res) => {
  try {
    const { category } = req.query;
    const query = category ? { category } : {};
    
    const images = await Image.find(query).sort({ timestamp: -1 });
    res.json(images);
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: error.message 
    });
  }
});

// Admin route to update image
router.put("/:id", adminAuth, async (req, res) => {
  try {
    const { title, description, category } = req.body;
    
    const updatedImage = await Image.findByIdAndUpdate(
      req.params.id,
      { title, description, category },
      { new: true }
    );

    if (!updatedImage) {
      return res.status(404).json({ 
        success: false, 
        message: 'Image not found' 
      });
    }

    res.json({ 
      success: true, 
      image: updatedImage 
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: error.message 
    });
  }
});

// Admin route to delete image
router.delete("/:id", adminAuth, async (req, res) => {
  try {
    const deletedImage = await Image.findByIdAndDelete(req.params.id);

    if (!deletedImage) {
      return res.status(404).json({ 
        success: false, 
        message: 'Image not found' 
      });
    }

    res.json({ 
      success: true, 
      message: 'Image deleted successfully' 
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: error.message 
    });
  }
});

module.exports = router;

