const cloudinary = require('cloudinary').v2;
const dotenv = require('dotenv');
const path = require('path');

// Load .env
dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const logoLocalPath = 'C:/Users/Guelo/.gemini/antigravity/brain/ecac675c-68b8-4e70-8906-1e17036e9452/media__1779169834693.png';

console.log('🚀 Uploading new logo to Cloudinary...');
console.log(`📂 Source: ${logoLocalPath}`);

cloudinary.uploader.upload(logoLocalPath, {
  folder: 'apc-website',
  public_id: 'apc_logo_branding',
  overwrite: true,
  resource_type: 'image'
}, (error, result) => {
  if (error) {
    console.error('❌ Upload failed:', error);
    process.exit(1);
  } else {
    console.log('✅ Upload successful!');
    console.log('🔗 Secure URL:', result.secure_url);
    console.log('🆔 Public ID:', result.public_id);
    process.exit(0);
  }
});
