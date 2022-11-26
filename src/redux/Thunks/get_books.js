import { createAsyncThunk } from '@reduxjs/toolkit';
import API_URL from '../Api';
import { loadBooks } from '../books/books';

const GET_BOOKS = 'books/GET_BOOK';

const getBooks = createAsyncThunk(GET_BOOKS, async (_, thunkAPI) => {
  const response = await fetch(`${API_URL}/books`, {
    method: 'GET',
  });
  const responseJSON = await response.json();

  thunkAPI.dispatch(loadBooks(responseJSON));
  return responseJSON;
});

export default getBooks;
