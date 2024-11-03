const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');
const pageRoutes = require('./routes/pageRoutes');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  secret: process.env.JWT_SECRET,
  resave: false,
  saveUninitialized: false
}));

app.set('view engine', 'ejs');

// Routes
app.use('/', authRoutes);
app.use('/', pageRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});