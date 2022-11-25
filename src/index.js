import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import { Provider } from 'react-redux';
import store from './redux/configure';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);

const API_ID = fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/',
  {
    method: 'POST',
  }).then((response) => response.json());

console.log(API_ID);
