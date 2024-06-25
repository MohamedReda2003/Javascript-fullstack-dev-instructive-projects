const express = require('express');
const app = express();
const port = 3000;

let tasks = [
    { id: 1, text: "Learn JavaScript", completed: true},
    { id: 2, text: "Learn React", completed: false },
];

app.use(express.static('public'));
app.use(express.json());

app.get('/api/tasks', (req, res) => {
    res.json(tasks);
});

app.post('/api/tasks', (req, res) => {
    const newTask = { id: tasks.length + 1, text: req.body.text, completed: false };
    tasks.push(newTask);
    res.json(newTask);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
