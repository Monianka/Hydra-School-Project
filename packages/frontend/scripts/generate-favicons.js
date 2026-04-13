const sharp = require('sharp');
const path = require('path');

const logoPath = path.resolve(__dirname, '../src/assets/logos/hydra_logo_transparent.png');
const faviconSourcePath = path.resolve(__dirname, '../src/assets/logos/hydra_logo.jpg');
const publicPath = path.resolve(__dirname, '../public');

const faviconBackground = { r: 0, g: 48, b: 73, alpha: 1 };

async function generateFavicons() {
  // Use the solid logo source for tiny favicons so they remain visible in search results.
  await sharp(faviconSourcePath)
    .resize(32, 32, { fit: 'contain', background: faviconBackground })
    .toFile(path.join(publicPath, 'favicon-32x32.png'));

  await sharp(faviconSourcePath)
    .resize(16, 16, { fit: 'contain', background: faviconBackground })
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
