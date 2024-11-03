const { pool } = require('../db');

const register = async (req, res) => {
  const { username, password } = req.body;
  try {
    await pool.query('INSERT INTO users (username, password) VALUES ($1, $2)', [username, password]);
    res.redirect('/login');
  } catch (err) {
    res.render('register', { error: 'Username already exists' });
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const result = await pool.query('SELECT * FROM users WHERE username = $1 AND password = $2', [username, password]);
    if (result.rows.length > 0) {
      req.session.user = username;
      res.redirect('/home');
    } else {
      res.render('login', { error: 'Invalid credentials' });
    }
  } catch (err) {
    res.render('login', { error: 'An error occurred' });
  }
};

const logout = (req, res) => {
  req.session.destroy();
  res.redirect('/login');
};

module.exports = {
  register,
  login,
  logout
};