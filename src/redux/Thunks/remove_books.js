import { createAsyncThunk } from '@reduxjs/toolkit';
import API_URL from '../Api';
import { removeBook } from '../books/books';

const DELETE_BOOK = 'books/DELETE_BOOK';

const removeBookAsync = createAsyncThunk(DELETE_BOOK, async (id, thunkAPI) => {
  const response = await fetch(`${API_URL}/books/${id}`, {
    method: 'DELETE',
    body: JSON.stringify({
      item_id: id,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const responseJSON = await response.text();
  thunkAPI.dispatch(removeBook(id));
  return responseJSON;
});

export default removeBookAsync;
