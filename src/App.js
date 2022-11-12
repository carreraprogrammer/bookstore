import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Categories from './components/Calculator';
import Navbar from './components/Navbar';
import Books from './components/Home';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/calculator" element={<Categories />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
