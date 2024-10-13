const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const { addTask, getTasks, updateTask, deleteTask } = require('../controllers/taskController');

router.get('/tasks', authMiddleware, getTasks);
router.post('/tasks', authMiddleware, addTask);
router.put('/tasks/:id', authMiddleware, updateTask);
router.delete('/tasks/:id', authMiddleware, deleteTask);

module.exports = router;