const pool = require('../config/db');

const createTaskTable = async () => {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS tasks (
      id SERIAL PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      description TEXT,
      user_id INT REFERENCES users(id),
      due_date DATE,
      completed BOOLEAN DEFAULT FALSE
    );
  `);
};

const createTask = async (title, description, userId, dueDate) => {
  const result = await pool.query(
    'INSERT INTO tasks (title, description, user_id, due_date) VALUES ($1, $2, $3, $4) RETURNING *',
    [title, description, userId, dueDate]
  );
  return result.rows[0];
};

const getTasksByUserId = async (userId) => {
  const result = await pool.query('SELECT * FROM tasks WHERE user_id = $1', [userId]);
  return result.rows;
};

const updateTaskById = async (taskId, { title, description, due_date }) => {
  try {
    const result = await pool.query(
      `UPDATE tasks SET title = $1, description = $2, due_date = $3 WHERE id = $4 RETURNING *`,
      [title, description, due_date, taskId]
    );
    return result.rows[0];
  } catch (error) {
    console.error('Error updating task in DB:', error);
    throw error;
  }
};

const deleteTaskById = async (taskId) => {
  const result = await pool.query('DELETE FROM tasks WHERE id = $1 RETURNING *', [taskId]);
  return result.rows[0];
};

module.exports = {
  createTaskTable,
  createTask,
  getTasksByUserId,
  updateTaskById,
  deleteTaskById
};