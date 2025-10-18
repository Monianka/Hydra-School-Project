const sharp = require('sharp');
const path = require('path');

const logoPath = path.resolve(__dirname, '../src/assets/logos/hydra_logo.jpg');
const publicPath = path.resolve(__dirname, '../public');

async function generateFavicons() {
  try {
    // Generate favicon sizes
    await sharp(logoPath)
      .resize(16, 16)
      .toFile(path.join(publicPath, 'favicon-16x16.png'));

    await sharp(logoPath)
      .resize(32, 32)
      .toFile(path.join(publicPath, 'favicon-32x32.png'));

    await sharp(logoPath)
      .resize(192, 192)
      .toFile(path.join(publicPath, 'logo192.png'));

    await sharp(logoPath)
      .resize(512, 512)
      .toFile(path.join(publicPath, 'logo512.png'));

    console.log('Favicons generated successfully!');
  } catch (error) {
    console.error('Error generating favicons:', error);
  }
}

generateFavicons();
