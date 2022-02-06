import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import App from './App';

// Renders the App component on index.html (id root).
// BrowserRouter must contain the App in order to work

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
        <App />
    </BrowserRouter>,
  </StrictMode>,  
  document.getElementById('root')
);