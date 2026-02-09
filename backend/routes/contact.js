const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();
const dataFile = path.join(__dirname, "../data/messages.json");

router.post("/", (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields required" });
  }

  let messages = [];
  if (fs.existsSync(dataFile)) {
    messages = JSON.parse(fs.readFileSync(dataFile));
  }

  messages.push({
    name,
    email,
    message,
    date: new Date().toISOString(),
  });

  fs.writeFileSync(dataFile, JSON.stringify(messages, null, 2));

  res.json({ success: true });
});

module.exports = router;
