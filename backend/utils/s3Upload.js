const { PutObjectCommand } = require('@aws-sdk/client-s3');
const { s3Client, BUCKET_NAME } = require('../config/s3');
const path = require('path');

/**
 * Upload a file buffer to S3
 * @param {Buffer} fileBuffer - The file buffer to upload
 * @param {string} fileName - The desired file name
 * @param {string} mimetype - The MIME type of the file
 * @param {string} folder - Optional folder path in S3 (e.g., 'live-photos')
 * @returns {Promise<string>} - The S3 URL of the uploaded file
 */
const uploadToS3 = async (fileBuffer, fileName, mimetype, folder = 'live-photos') => {
  try {
    // Create unique filename with timestamp
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const ext = path.extname(fileName);
    const baseName = path.basename(fileName, ext);
    const uniqueFileName = `${folder}/${baseName}-${uniqueSuffix}${ext}`;

    // Upload parameters
    const uploadParams = {
      Bucket: BUCKET_NAME,
      Key: uniqueFileName,
      Body: fileBuffer,
      ContentType: mimetype, // Make the file publicly accessible
    };
    
    // Upload to S3
    await s3Client.send(new PutObjectCommand(uploadParams));

    // Construct and return the public URL
    // Format: https://bucket-name.s3.region.amazonaws.com/key
    // For CloudFront or custom domain, use AWS_S3_BASE_URL if provided
    const region = 'ap-south-1' || 'us-east-1';
    // const baseUrl = process.env.AWS_S3_BASE_URL;
    
    let s3Url;
      s3Url = `https://${BUCKET_NAME}.s3.${region}.amazonaws.com/${uniqueFileName}`;
    
    return s3Url;
  } catch (error) {
    console.error('S3 Upload Error:', error);
    throw new Error(`Failed to upload file to S3: ${error.message}`);
  }
};

module.exports = {
  uploadToS3,
};

