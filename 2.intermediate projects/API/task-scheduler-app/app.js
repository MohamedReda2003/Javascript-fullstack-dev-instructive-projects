require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const pool = require('./config/db');
const { createUserTable } = require('./models/User');
const { createTaskTable } = require('./models/Task');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.set('view engine', 'ejs');

// Initialize tables
(async () => {
  await createUserTable();
  await createTaskTable();
})();

app.use('/', require('./routes/authRoutes'));
app.use('/', require('./routes/taskRoutes'));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

//
