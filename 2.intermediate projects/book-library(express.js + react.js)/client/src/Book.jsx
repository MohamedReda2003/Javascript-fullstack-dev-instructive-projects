import React from 'react';

const Book = ({ book }) => {
    return (
        <li className="list-group-item">
            <strong>{book.title}</strong> by {book.author}
        </li>
    );
};

export default Book;
