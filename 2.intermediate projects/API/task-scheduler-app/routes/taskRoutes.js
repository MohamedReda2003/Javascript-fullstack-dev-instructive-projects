const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const { addTask, getTasks } = require('../controllers/taskController');

router.get('/tasks', authMiddleware, getTasks);
router.post('/tasks', authMiddleware, addTask);

module.exports = router;
