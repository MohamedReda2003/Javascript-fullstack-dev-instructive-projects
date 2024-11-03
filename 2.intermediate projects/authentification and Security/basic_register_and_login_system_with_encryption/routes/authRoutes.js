const express = require('express');
const router = express.Router();
const { pool } = require('../db');
const bcrypt = require('bcrypt');  // Don't forget to install this: npm install bcrypt

// Registration route handler
router.post('/register', async (req, res) => {
  const { username, password, email } = req.body;
  
  if (!username || !password || !email) {
    return res.render('register', { error: 'All fields are required' });
  }

  try {
    // Check if username already exists
    const userCheck = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
    if (userCheck.rows.length > 0) {
      return res.render('register', { error: 'Username already exists' });
    }
    
    // Hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    
    // Insert new user with hashed password
    await pool.query(
      'INSERT INTO users (username, email, password) VALUES ($1, $2, $3)',
      [username, email, hashedPassword]
    );
    res.redirect('/login');
  } catch (err) {
    console.error('Registration error:', err);
    res.render('register', { error: 'An error occurred during registration' });
  }
});

// Login route handler
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    // Get user from database
    const result = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
    
    if (result.rows.length > 0) {
      // Compare password with hashed password
      const match = await bcrypt.compare(password, result.rows[0].password);
      
      if (match) {
        req.session.user = username;
        res.redirect('/home');
      } else {
        res.render('login', { error: 'Invalid credentials' });
      }
    } else {
      res.render('login', { error: 'Invalid credentials' });
    }
  } catch (err) {
    console.error('Login error:', err);
    res.render('login', { error: 'An error occurred' });
  }
});

// Logout route handler
router.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/login');
});

// GET routes for rendering pages
router.get('/login', (req, res) => {
  res.render('login', { error: null });
});

router.get('/register', (req, res) => {
  res.render('register', { error: null });
});

module.exports = router;