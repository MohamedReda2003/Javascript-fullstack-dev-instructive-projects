require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const pool = require('./config/db');
const { createUserTable } = require('./models/User');
const { createTaskTable } = require('./models/Task');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // Add this line to parse JSON request bodies
app.use(cookieParser());
app.set('view engine', 'ejs');

// Initialize tables
(async () => {
  try {
    await createUserTable();
    await createTaskTable();
    console.log('Database tables initialized successfully');
  } catch (error) {
    console.error('Error initializing database tables:', error);
    process.exit(1);
  }
})();

app.use('/', require('./routes/authRoutes'));
app.use('/', require('./routes/taskRoutes'));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app; // Export the app for testing purposes