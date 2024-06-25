const express = require('express');
const app = express();
const port = 3000;

let books = [
    { id: 1, title: "1984", author: "George Orwell" },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee" }
];

app.use(express.static('public'));
app.use(express.json());

app.get('/api/books', (req, res) => {
    res.json(books);
});

app.post('/api/books', (req, res) => {
    const newBook = { id: books.length + 1, title: req.body.title, author: req.body.author };
    books.push(newBook);
    res.json(newBook);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
