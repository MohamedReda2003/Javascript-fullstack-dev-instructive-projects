# Task Scheduler App
![PostegreSQL logo](https://github.com/user-attachments/assets/6d240c24-7267-4861-b42c-e87b550c976a)
A simple task scheduler API built with Node.js and Express, connected to a PostgreSQL database. This application allows users to register, log in, and manage their tasks. The project is designed with security in mind, ensuring that only authenticated users can manage their tasks.

## Features

- User registration and login with hashed passwords
- Secure API endpoints using JWT authentication
- Task creation, updating, and deletion for authenticated users
- PostgreSQL database for storing user and task information
- Basic error handling and input validation

## Installation

1. Install the required dependencies:
   ```bash
   npm install
   ```

2. Set up the PostgreSQL database:
   - Create a PostgreSQL database and a user then grant all the  appropriate privileges to him.
   - Update the all your database info  in your environment variables ( it is advisable to change the JWT_SECRET, search about the JWT and how you can generate your own JWT_SECRET)

3. Run the application:
   ```bash
   npm run dev
   ```

   The server will be running on `http://localhost:3000`.
   the first page you have to visit is `http://localhost:3000/register`, after entering your info, you will be directed to `http://localhost:3000/login` then if your credentials are correct, you will find yourself in `http://localhost:3000/tasks` to manage your tasks


## Dependencies

- **Express**: A web application framework for Node.js
- **pg**: PostgreSQL client for Node.js
- **bcryptjs**: For hashing passwords
- **jsonwebtoken**: For handling authentication via JWT
- **cookie-parser**: For parsing cookies
- **ejs**


