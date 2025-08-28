const express = require('express');
const multer = require("multer");
const { v2: cloudinary } = require("cloudinary");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const router = express.Router();

// Cloudinary config
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,      // replace with your Cloudinary cloud name
    api_key: process.env.CLOUDINARY_API_KEY,      // replace with your Cloudinary API key
    api_secret: process.env.CLOUDINARY_SECRET_KEY // replace with your Cloudinary API secret
});

// Set up Cloudinary storage for multer
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'ecommerce_products',   // optional: folder name in Cloudinary
        allowed_formats: ['jpg', 'png', 'jpeg'],
        public_id: (req, file) => `${file.fieldname}_${Date.now()}`
    }
});
const upload = multer({ storage: storage });

router.post("/upload", upload.single('product'), (req, res) => {
    res.json({
        success: 1,
        image_url: req.file.path // Cloudinary URL
    });
});

module.exports = router;