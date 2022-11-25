import React from 'react';
import { useDispatch } from 'react-redux';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Categories from './Pages/Categories';
import Navbar from './components/Navbar';
import Books from './Pages/Books';
import getBooks from './redux/Thunks/get_books';

function App() {
  const dispatch = useDispatch();
  dispatch(getBooks());

  return (
    <Router>
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
