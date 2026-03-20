const legoColors = require("./legoColors")

function distance(c1, c2) {
  return Math.sqrt(
    (c1.r - c2.r) ** 2 +
    (c1.g - c2.g) ** 2 +
    (c1.b - c2.b) ** 2
  )
}

function mapToLegoColor(pixel) {

  let closest = legoColors[0]
  let minDist = distance(pixel, legoColors[0])

  legoColors.forEach(color => {

    const d = distance(pixel, color)

    if (d < minDist) {
      minDist = d
      closest = color
    }

  })

  return closest
}

function mapGridToLego(grid) {

  return grid.map(row =>
    row.map(pixel => mapToLegoColor(pixel))
  )

}

module.exports = mapGridToLego