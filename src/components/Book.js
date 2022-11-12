import React from 'react';
import PropTypes from 'prop-types';

class Book extends React.PureComponent {
  render() {
    const { title, author } = this.props;
    return (
      <div className="book">
        <div className="bookInfo">
          <h2 className="bookTitle">{title}</h2>
          <span className="bookAuthor">{author}</span>
        </div>
        <div className="bookActions">
          <button type="button">Comments</button>
          <button type="button">Remove</button>
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
  }
}

Book.defaultProps = {
  title: 'Title',
  author: 'Author',
};

Book.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
};

export default Book;
