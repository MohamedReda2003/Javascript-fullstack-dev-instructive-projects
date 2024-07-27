const express = require('express');
const app = express();
const port = 3000;

let tasks = [];

app.use(express.static('public'));
app.use(express.json());

app.get('/tasks', (req, res) => {
    res.json(tasks);
});

app.post('/tasks', (req, res) => {
    tasks.push(req.body.task);
    res.json({ success: true });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
