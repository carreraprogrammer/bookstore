import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import addBookAsync from '../redux/Thunks/add_books';

const Form = () => {
  const dispatch = useDispatch();

  const uniqueKey = uuidv4();

  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
    category: '',
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
    dispatch(addBookAsync({
      item_id: uuidv4(),
      title: newBook.title,
      author: newBook.author,
      category: newBook.category,
    }));
    setNewBook({
      title: '',
      author: '',
      category: '',
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

export default Form;
