const sharp = require("sharp")

async function generateMosaic(imagePath, gridSize = 32) {

  const { data, info } = await sharp(imagePath)
    .resize(gridSize, gridSize)
    .raw()
    .toBuffer({ resolveWithObject: true })

  const pixels = []

  for (let y = 0; y < info.height; y++) {

    const row = []

    for (let x = 0; x < info.width; x++) {

      const index = (y * info.width + x) * info.channels

      const r = data[index]
      const g = data[index + 1]
      const b = data[index + 2]

      row.push({ r, g, b })

    }

    pixels.push(row)
  }

  return pixels
}

module.exports = generateMosaic