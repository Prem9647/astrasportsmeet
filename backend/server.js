require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const connectDB = require('./config/db');

// Import routes
const indexRoutes = require('./routes/index');
const teamsRoutes = require('./routes/teams');
const eventsRoutes = require('./routes/events');
const adminTeamsRoutes = require('./routes/adminTeams');
const adminEventsRoutes = require('./routes/adminEvents');
const adminPlayerManagement = require('./routes/adminPlayerManagement');
const adminLivePhotos = require('./routes/adminLivePhotos');

const app = express();

// ============================================
// MIDDLEWARE SETUP (Express Waterfall Pattern)
// ============================================

// 1. CORS - Must be first to handle preflight requests
// CORS configuration for production deployment
// const corsOptions = {
//   origin: process.env.CLIENT_URL || 'http://localhost:3000',
//   credentials: true,
//   optionsSuccessStatus: 200
// };
app.use(cors());

// 2. Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 3. Static file serving
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// ============================================
// DATABASE CONNECTION
// ============================================
connectDB();

// ============================================
// ROUTES (Public routes first, then admin routes)
// ============================================

// Public routes
app.use('/', indexRoutes);
app.use('/api/teams', teamsRoutes);
app.use('/api/events', eventsRoutes);

// Admin routes
app.use('/api/admin', adminTeamsRoutes);
app.use('/api/admin', adminEventsRoutes);
app.use('/api/admin', adminPlayerManagement);
app.use('/api/admin', adminLivePhotos);

// ============================================
// ERROR HANDLING MIDDLEWARE
// ============================================

// 404 handler - Must be after all routes
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

// Global error handler - Must be last
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal server error'
  });
});

// ============================================
// SERVER STARTUP
// ============================================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
