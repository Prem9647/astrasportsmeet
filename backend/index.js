require('dotenv').config();
const express = require("express");
const cors = require("cors");
const connectDB = require('./config/db');
const Team = require("./models/Team");
const Event = require("./models/Event");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
connectDB();

// Utility function
const calculatePoints = (team) =>
  team.gold * 3 + team.silver * 2 + team.bronze + team.bonus;

// 🔹 PUBLIC API (Users)
app.get("/api/teams", async (req, res) => {
  const teams = await Team.find();

  const result = teams.map(team => ({
    ...team._doc,
    points: calculatePoints(team)
  }));

  res.json(result);
});

// 🔹 ADMIN: Add point
app.post("/api/admin/add-point", async (req, res) => {
  const { teamId, type } = req.body;

  await Team.findByIdAndUpdate(teamId, {
    $inc: { [type]: 1 }
  });

  res.json({ success: true });
});

// 🔹 ADMIN: Add new team (dynamic teams)
app.post("/api/admin/add-team", async (req, res) => {
  const { name } = req.body;
  await Team.create({ name });
  res.json({ success: true });
});


// 🔹 PUBLIC: Get all events
app.get("/api/events", async (req, res) => {
  const events = await Event.find();
  res.json(events);
});

// 🔹 ADMIN: Add event
app.post("/api/admin/events", async (req, res) => {
  const event = await Event.create(req.body);
  res.json(event);
});

// 🔹 ADMIN: Update event
app.put("/api/admin/events/:id", async (req, res) => {
  const updated = await Event.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updated);
});

// 🔹 ADMIN: Delete event
app.delete("/api/admin/events/:id", async (req, res) => {
  await Event.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

app.listen(5000, () =>
  console.log("Server running on http://localhost:5000")
);
