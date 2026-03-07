const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

const SVG_PATH = path.join(__dirname, '../public/favicon.svg');
const OUTPUT_DIR = path.join(__dirname, '../public');

const ICON_SIZES = [
  { name: 'icon-192.png', size: 192 },
  { name: 'icon-512.png', size: 512 },
  { name: 'icon-512-maskable.png', size: 512, padding: 0.1 },
];

async function generateIcons() {
  try {
    console.log('🎨 Generating PWA icons from SVG...\n');

    await fs.access(SVG_PATH);
    console.log(`✓ Found favicon.svg`);

    const svgBuffer = await fs.readFile(SVG_PATH);

    for (const icon of ICON_SIZES) {
      console.log(`\nGenerating ${icon.name} (${icon.size}x${icon.size}px)...`);

      const outputPath = path.join(OUTPUT_DIR, icon.name);

      if (icon.padding) {
        const paddingPx = Math.floor(icon.size * icon.padding);
        const innerSize = icon.size - (paddingPx * 2);

        await sharp({
          create: {
            width: icon.size,
            height: icon.size,
            channels: 4,
            background: { r: 0, g: 0, b: 0, alpha: 0 }
          }
        })
        .composite([{
          input: await sharp(svgBuffer)
            .resize(innerSize, innerSize, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
            .toBuffer(),
          gravity: 'center'
        }])
        .png()
        .toFile(outputPath);

        console.log(`✓ Created ${icon.name} (with ${icon.padding * 100}% padding for safe area)`);
      } else {
        await sharp(svgBuffer)
          .resize(icon.size, icon.size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
          .png()
          .toFile(outputPath);

        console.log(`✓ Created ${icon.name}`);
      }
    }

    console.log('\n✅ All PWA icons generated successfully!');
    console.log('\nGenerated files:');
    ICON_SIZES.forEach(icon => console.log(`  - public/${icon.name}`));
    
  } catch (error) {
    console.error('\n❌ Error generating icons:', error.message);
    
    if (error.code === 'ENOENT') {
      console.error('\n💡 Make sure public/favicon.svg exists');
    } else if (error.message.includes('sharp')) {
      console.error('\n💡 Install sharp: npm install --save-dev sharp');
    }
    
    process.exit(1);
  }
}

generateIcons();
