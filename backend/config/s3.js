require('dotenv').config();
const { S3Client } = require('@aws-sdk/client-s3');


// Initialize S3 client
const s3Client = new S3Client({
  region: 'ap-south-1' || 'us-east-1',
  credentials: {
    accessKeyId:  process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey:  process.env.AWS_SECRET_ACCESS_KEY,
  },
});

// S3 bucket name
const BUCKET_NAME = process.env.AWS_S3_BUCKET_NAME;
console.log("Bucket name is", BUCKET_NAME, "region is", 'ap-south-1', "access key id is", process.env.AWS_ACCESS_KEY_ID, "secret access key is", process.env.AWS_SECRET_ACCESS_KEY)
module.exports = {
  s3Client,
  BUCKET_NAME,
};

