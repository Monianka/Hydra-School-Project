const sharp = require('sharp');
const path = require('path');

const logoPath = path.resolve(__dirname, '../src/assets/logos/hydra_logo_transparent.png');
const publicPath = path.resolve(__dirname, '../public');

async function generateFavicons() {
  // Generate favicon.ico (16x16, 32x32)
  await sharp(logoPath)
    .resize(32, 32)
    .toFile(path.join(publicPath, 'favicon-32x32.png'));

  await sharp(logoPath)
    .resize(16, 16)
    .toFile(path.join(publicPath, 'favicon-16x16.png'));

  // Generate larger icons
  await sharp(logoPath)
    .resize(192, 192)
    .toFile(path.join(publicPath, 'logo192.png'));

  await sharp(logoPath)
    .resize(512, 512)
    .toFile(path.join(publicPath, 'logo512.png'));

  await sharp(logoPath)
    .resize(180, 180)
    .toFile(path.join(publicPath, 'apple-touch-icon.png'));
}

generateFavicons();
