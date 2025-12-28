require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const path = require('path');

const app = express();
app.use(cors());

// Connect to database
connectDB();

// Import models
const Team = require('./models/Team');
const Event = require('./models/Event');
const LivePhoto = require('./models/LivePhoto');

// Middleware
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Utility function
const calculatePoints = (team) =>
  team.gold * 3 + team.silver * 2 + team.bronze + team.bonus;

// 🔹 PUBLIC API (Users)
app.get('/', (req, res) => {
    res.send('API is running...');
});

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

// 🔹 ADMIN: Remove point
app.post("/api/admin/remove-point", async (req, res) => {
  const { teamId, type } = req.body;

  // Decrement the point type but ensure it doesn't go below 0
  await Team.findByIdAndUpdate(teamId, {
    $inc: { [type]: -1 }
  });

  res.json({ success: true });
});

// 🔹 ADMIN: Reset points
app.post("/api/admin/reset-points", async (req, res) => {
  const { teamId } = req.body;

  // Reset all point types to 0
  await Team.findByIdAndUpdate(teamId, {
    gold: 0,
    silver: 0,
    bronze: 0,
    bonus: 0
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

// Import new routes
const adminPlayerManagement = require('./routes/adminPlayerManagement');
const adminLivePhotos = require('./routes/adminLivePhotos');

// Use new routes
app.use('/api/admin', adminPlayerManagement);
app.use('/api/admin', adminLivePhotos);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});