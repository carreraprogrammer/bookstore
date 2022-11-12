import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Categories from './Pages/Categories';
import Navbar from './components/Navbar';
import Books from './Pages/Books';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
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
}

export default App;
