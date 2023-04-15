import ReactDOM from 'react-dom';
import React from 'react';
import './index.css';
import App from './App';
import { MyContextProvider } from './context';

ReactDOM.render(
  <React.StrictMode>
    <MyContextProvider>
      <App />
    </MyContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);