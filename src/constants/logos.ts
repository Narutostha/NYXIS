// Define environment (you can set this based on your NODE_ENV or custom env variable)
const isDevelopment = process.env.NODE_ENV === 'development';

// Base paths
const localPath = '';  // empty string for local public folder
const cloudFrontPath = 'https://d5st4psppqx3d.cloudfront.net';

// Use local path in development, CloudFront in production
const basePath = isDevelopment ? localPath : cloudFrontPath;

export const logos = {
  design: `${basePath}/NYXIS.png`,
  creative: `${basePath}/NYXIS.png`
  
};