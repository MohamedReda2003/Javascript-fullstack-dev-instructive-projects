const express = require('express');
const cors = require('cors'); // Include this if your React app and server are running on different ports
const bodyParser = require('body-parser');

const app = express();
const port =5000;

// Middleware
app.use(cors()); // Enable CORS if necessary
app.use(bodyParser.json());

// In-memory storage for tasks
let tasks = []; // This will act as our database for now

// Route to get all tasks
app.get('/api/tasks', (req, res) => {
    res.json(tasks);
});

// Route to add a new task
app.post('/api/tasks', (req, res) => {
    const { text } = req.body;

    if (!text) {
        return res.status(400).json({ error: 'Task text is required' });
    }

    // Create a new task object
    const newTask = { id: tasks.length + 1, text };

    // Add the new task to the in-memory array
    tasks.push(newTask);

    // Return the newly created task
    res.json(newTask);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
