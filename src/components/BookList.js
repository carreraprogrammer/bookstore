import React from 'react';
import Book from './Book';

class BookList extends React.PureComponent {
  render() {
    const bookArray = [
      { key: 1, title: 'firstBook', author: 'first' },
      { key: 2, title: 'secondBook', author: 'second' },
      { key: 3, title: 'thirdBook', author: 'third' },
    ];
    return (
      <ul className="booksList">
        {bookArray.map((book) => <Book key={book.key} title={book.title} author={book.author} />)}
      </ul>
    );
  }
}

export default BookList;
