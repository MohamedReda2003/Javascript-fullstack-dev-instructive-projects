import React, { useState, useEffect } from 'react';
import Book from './Book.js';

const App = () => {
    const [books, setBooks] = useState([]);
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");

    useEffect(() => {
        fetch('/api/books')
            .then(response => response.json())
            .then(data => setBooks(data));
    }, []);

    const addBook = () => {
        fetch('/api/books', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, author }),
        })
        .then(response => response.json())
        .then(book => setBooks([...books, book]));

        setTitle("");
        setAuthor("");
    };

    return (
        <div className="container">
            <h1>Book Library</h1>
            <input 
                type="text" 
                className="form-control" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                placeholder="Book Title" 
            />
            <input 
                type="text" 
                className="form-control mt-2" 
                value={author} 
                onChange={(e) => setAuthor(e.target.value)} 
                placeholder="Book Author" 
            />
            <button className="btn btn-primary mt-2" onClick={addBook}>Add Book</button>
            <ul className="list-group mt-4">
                {books.map(book => (
                    <Book key={book.id} book={book} />
                ))}
            </ul>
        </div>
    );
};

export default App;
