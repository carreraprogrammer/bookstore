import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import Form from './Form';
import { addBook } from '../redux/books/books';

const BookList = () => {
  const booksArray = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const addNewBook = (book) => {
    dispatch(addBook(book));
  };

  return (
    <div className="bookListContainer">
      <ul className="booksList">
        {booksArray.map((book) => <Book key={book.key} title={book.title} author={book.author} />)}
      </ul>
      <Form addNewBook={addNewBook} />
    </div>
  );
};

export default BookList;
