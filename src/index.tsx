import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.scss';
import App from './App';
import {BrowserRouter as Router } from 'react-router-dom';
import { ThemeContextProvider } from './contexts/ThemeContext';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Router>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
    </Router>
  </React.StrictMode>
);

