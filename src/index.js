import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css'; // Optional global CSS
import App from './App'; // The main App component

// Rendering the App component to the root DOM node
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Refers to the "root" div in public/index.html
);
