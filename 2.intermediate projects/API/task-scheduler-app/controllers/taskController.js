const { createTask, getTasksByUserId } = require('../models/Task');

const addTask = async (req, res) => {
  const { title, description, dueDate } = req.body;
  const userId = req.user.id;

  const newTask = await createTask(title, description, userId, dueDate);
  res.redirect('/tasks');
};

const getTasks = async (req, res) => {
  const userId = req.user.id;
  const tasks = await getTasksByUserId(userId);

  res.render('tasks', { tasks });
};

module.exports = { addTask, getTasks };
