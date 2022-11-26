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
        <div className="bookActions">
          <button type="button" className="commentsBtn actionBtn">Comments</button>
          <button type="button" className="removeBtn actionBtn" onClick={deleteBook}>Remove</button>
          <button type="button" className="editBtn actionBtn">Edit</button>
        </div>
      </div>
      <div className="progressBlock">
        <div className="circularProgressContainer">
          <div className="circularProgress" />
        </div>
        <div className="statusSection">
          <span className="percentageCompleted">
            {`${Math.round(Math.random() * 99) + 1}%`}
            {' '}
          </span>
          <p className="statusBook">completed</p>
        </div>
      </div>
      <div className="chapterInfo">
        <div className="chapterTitle">
          CURRENT CHAPTER
        </div>
        <div className="currentChapter">
          Introduction
        </div>
        <button className="updateBtn" type="button">
          UPDATE PROGRESS
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
