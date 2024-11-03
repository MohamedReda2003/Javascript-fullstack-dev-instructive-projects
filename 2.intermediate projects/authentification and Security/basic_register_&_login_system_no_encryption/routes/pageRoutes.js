const express = require('express');
const router = express.Router();
const { pool } = require('../db');

const isAuthenticated = (req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    res.redirect('/login');
  }
};

router.get('/', (req, res) => {
  if (req.session.user) {
    res.redirect('/home');
  } else {
    res.redirect('/login');
  }
});

router.get('/home', isAuthenticated, (req, res) => {
  res.render('home', { username: req.session.user });
});

// New route to view all users
router.get('/users', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: 'Database error' });
  }
});

module.exports = router;