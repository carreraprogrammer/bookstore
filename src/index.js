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
