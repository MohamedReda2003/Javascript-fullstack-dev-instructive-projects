const { createTask, getTasksByUserId, updateTaskById, deleteTaskById } = require('../models/Task');

const addTask = async (req, res) => {
  try {
    const { title, description, due_date } = req.body;
    const userId = req.user.id;

    const newTask = await createTask(title, description, userId, due_date);
    res.redirect('/tasks');
  } catch (error) {
    console.error('Error adding task:', error);
    res.status(500).json({ error: 'Failed to add task' });
  }
};

const getTasks = async (req, res) => {
  try {
    const userId = req.user.id;
    const tasks = await getTasksByUserId(userId);
    res.render('tasks', { tasks });
  } catch (error) {
    console.error('Error getting tasks:', error);
    res.status(500).json({ error: 'Failed to get tasks' });
  }
};

const updateTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    const { title, description, due_date } = req.body;

    console.log('Received data for task update:', { taskId, title, description, due_date });

    const updatedTask = await updateTaskById(taskId, { title, description, due_date });
    
    if (updatedTask) {
      console.log('Successfully updated task:', updatedTask);
      res.json(updatedTask);
    } else {
      res.status(404).json({ error: 'Task not found' });
    }
  } catch (error) {
    console.error('Error updating task:', error);
    res.status(500).json({ error: 'Failed to update task', details: error.message });
  }
};

const deleteTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    const deletedTask = await deleteTaskById(taskId);
    if (deletedTask) {
      res.json({ message: 'Task deleted successfully' });
    } else {
      res.status(404).json({ error: 'Task not found' });
    }
  } catch (error) {
    console.error('Error deleting task:', error);
    res.status(500).json({ error: 'Failed to delete task' });
  }
};

module.exports = { addTask, getTasks, updateTask, deleteTask };