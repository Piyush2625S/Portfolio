const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();

const dataPath = path.join(__dirname, "../data/messages.json");

router.post("/", (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const newMessage = {
    name,
    email,
    message,
    createdAt: new Date().toISOString()
  };

  let messages = [];

  if (fs.existsSync(dataPath)) {
    messages = JSON.parse(fs.readFileSync(dataPath, "utf-8"));
  }

  messages.push(newMessage);

  fs.writeFileSync(dataPath, JSON.stringify(messages, null, 2));

  res.status(200).json({ success: true });
});

router.get("/messages", (req, res) => {
  const dataPath = path.join(__dirname, "../data/messages.json");

  try {
    if (!fs.existsSync(dataPath)) {
      return res.json([]);
    }

    const fileData = fs.readFileSync(dataPath, "utf-8");
    const messages = fileData ? JSON.parse(fileData) : [];

    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: "Failed to read messages" });
  }
});


module.exports = router;
