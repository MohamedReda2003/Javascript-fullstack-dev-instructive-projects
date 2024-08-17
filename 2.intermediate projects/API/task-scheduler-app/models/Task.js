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

module.exports = {
  createTaskTable,
  createTask,
  getTasksByUserId,
};
