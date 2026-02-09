const express = require("express");
const path = require("path");
const cors = require("cors");

const contactRoutes = require("./routes/contact");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Serve frontend
app.use(express.static(path.join(__dirname, "../frontend")));

// API route
app.use("/api/contact", contactRoutes);

// Health check
app.get("/health", (req, res) => {
  res.send("Backend running");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
