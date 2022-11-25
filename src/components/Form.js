import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

const Form = (props) => {
  const { addNewBook } = props;

  const uniqueKey = uuidv4();

  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
  });

  const handleChange = (e) => {
    setNewBook({
      ...newBook,
      [e.target.name]: e.target.value,
      key: uniqueKey,
    });
  };

  const addBookToList = (e) => {
    e.preventDefault();
    addNewBook(newBook);
    setNewBook({
      title: '',
      author: '',
    });
  };

  return (
    <section className="formContainer">
      <h2 className="formTitle">
        ADD NEW BOOK
      </h2>
      <form className="form">
        <input className="bookTitleForm" type="text" placeholder="Book title" name="title" id="name" value={newBook.title} onChange={handleChange} required />
        <input className="bookAuthorForm" type="text" placeholder="Author" name="author" id="author" value={newBook.author} onChange={handleChange} required />
        <button className="addBtn" type="submit" onClick={addBookToList}>ADD BOOK</button>
      </form>
    </section>
  );
};

Form.propTypes = {
  addNewBook: PropTypes.func.isRequired,
};

export default Form;
