import { createAsyncThunk } from '@reduxjs/toolkit';
import API_URL from '../Api';

const POST_BOOK = 'books/POST_BOOK';

const addBookAsync = createAsyncThunk(POST_BOOK, async (book, thunkAPI) => {
  const response = await fetch(`${API_URL}/books/`, {
    method: 'POST',
    body: JSON.stringify(book),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const responseText = await response.text();

  thunkAPI.dispatch(addBook(book));
  return responseText;
});

export default addBookAsync;
