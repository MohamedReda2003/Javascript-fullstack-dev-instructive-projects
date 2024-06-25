const express = require('express');
const app = express();
const port = 3000;

let messages = [];

app.use(express.static('public'));
app.use(express.json());

app.get('/messages', (req, res) => {
    res.json(messages);
});

app.post('/messages', (req, res) => {
    messages.push(req.body.message);
    res.json({ success: true });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
