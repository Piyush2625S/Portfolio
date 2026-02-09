const express = require("express");
const path = require("path");
const cors = require("cors");

const contactRoutes = require("./routes/contact");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve frontend (important for Render)
app.use(express.static(path.join(__dirname, "../frontend")));

// API route
app.use("/api/contact", contactRoutes);

// Health check (Render uses this style internally)
app.get("/health", (req, res) => {
  res.status(200).send("Backend is running");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
