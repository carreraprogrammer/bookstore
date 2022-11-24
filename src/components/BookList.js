import React, { useState } from 'react';
import Book from './Book';
import Form from './Form';

const BookList = () => {
  const [booksArray, setBooksArray] = useState([
    { key: 1, title: 'firstBook', author: 'first' },
    { key: 2, title: 'secondBook', author: 'second' },
    { key: 3, title: 'thirdBook', author: 'third' },
  ]);

  const addBook = (book) => {
    const newBook = book;

    setBooksArray([
      ...booksArray,
      newBook,
    ]);
  };

  return (
    <div className="bookListContainer">
      <ul className="booksList">
        {booksArray.map((book) => <Book key={book.key} title={book.title} author={book.author} />)}
      </ul>
      <Form addNewBook={addBook} />
    </div>
  );
};

export default BookList;
