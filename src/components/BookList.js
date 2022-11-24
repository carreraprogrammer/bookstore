import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import Form from './Form';

const BookList = () => {
  const [booksArray, setBooksArray] = useState(
    useSelector((state) => state.books),
  );

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
