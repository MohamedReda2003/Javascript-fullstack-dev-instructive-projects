const { Pool } = require('pg');
require('dotenv').config();
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
});

// Create the users table if it doesn't exist
pool.query(`
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      username VARCHAR(50) UNIQUE NOT NULL,
      password VARCHAR(50) NOT NULL
    )
`, (err, res) => {
    if (err) {
      console.error('Error creating users table', err);
    } else {
      console.log('Users table created successfully');
    }
});
  
module.exports = { pool };