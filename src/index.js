import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import soldeReducer from './redux/SoldeSlice'
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = configureStore({reducer: soldeReducer});

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


