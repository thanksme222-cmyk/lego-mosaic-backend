const express = require("express")
const generateMosaic = require("../../utils/imageProcessor")
const mapGridToLego = require("../../utils/colorMapper")

const router = express.Router()

router.post("/", async (req, res) => {

  const { imagePath } = req.body

  const rgbGrid = await generateMosaic(imagePath, 32)

  const legoGrid = mapGridToLego(rgbGrid)

  res.json(legoGrid)

})

module.exports = router