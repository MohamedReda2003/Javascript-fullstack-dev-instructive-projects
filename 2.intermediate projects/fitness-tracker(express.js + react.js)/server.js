const express = require('express');
const app = express();
const port = 3000;

let workouts = [];

app.use(express.static('public'));
app.use(express.json());

app.get('/api/workouts', (req, res) => {
    res.json(workouts);
});

app.post('/api/workouts', (req, res) => {
    workouts.push(req.body.workout);
    res.json({ success: true });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
