import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'; // Proper BrowserRouter import
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'; // Correct Bootstrap CSS import
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Correct Bootstrap JS import
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

reportWebVitals();
