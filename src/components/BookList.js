import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import Form from './Form';
import removeBookAsync from '../redux/Thunks/remove_books';

const BookList = () => {
  const booksArray = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const deleteBook = (id) => {
    dispatch(removeBookAsync(id));
  };

  return (
    <div className="bookListContainer">
      <ul className="booksList">
        {booksArray.map((book) => (
          <Book
            removeBook={deleteBook}
            key={book.item_id}
            id={book.item_id}
            title={book.title}
            author={book.author}
          />
        ))}
      </ul>
      <Form />
    </div>
  );
};

export default BookList;
