const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');

router.get('/register', (req, res) => res.render('register'));
router.get('/login', (req, res) => res.render('login'));

router.post('/register', register);
router.post('/login', login);

module.exports = router;
