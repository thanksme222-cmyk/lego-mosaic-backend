const express = require("express");
const cors = require("cors");

// Routes
const uploadRoutes = require("./features/upload/upload.routes");
const mosaicRoutes = require("./features/mosaic/mosaic.routes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Static folder (to access uploaded images)
app.use("/uploads", express.static("uploads"));

// Routes
app.use("/upload", uploadRoutes);
app.use("/mosaic", mosaicRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Backend running");
});

// Start server
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});