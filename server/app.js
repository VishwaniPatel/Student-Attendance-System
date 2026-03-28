const express = require("express");
const cors = require("cors");
const studentRoutes = require("./routes/studentRoutes");

const app = express();

// Enable CORS that allow frontend to call backend
app.use(cors());
// Middleware to parse JSON request body
app.use(express.json());

// Routes
app.use("/api", studentRoutes);

module.exports = app;