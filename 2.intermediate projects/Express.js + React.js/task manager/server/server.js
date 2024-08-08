const express = require('express');
const app = express();
const port = 5000;

app.use(express.static('public'));
app.use(express.json());

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
