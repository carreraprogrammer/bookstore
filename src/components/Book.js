import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const {
    title, author, id, removeBook,
  } = props;

  const deleteBook = () => {
    removeBook(id);
  };

  return (
    <div className="book" id={id}>
      <div className="bookInfo">
        <h2 className="bookTitle">{title}</h2>
        <span className="bookAuthor">{author}</span>
      </div>
      <div className="bookActions">
        <button type="button">Comments</button>
        <button type="button" onClick={deleteBook}>Remove</button>
        <button type="button">Edit</button>
      </div>
      <div className="progressBlock">
        <progress value="60" max="100"> 60%</progress>
        <span>60%</span>
      </div>
      <div className="chapterInfo">
        <div>
          chapter info
        </div>
        <div>
          introduction
        </div>
        <button type="button">
          Update progress
        </button>
      </div>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default Book;
