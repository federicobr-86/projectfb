import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Renders the App component on index.html (id root), in this case we'll use Strict mode to detect potential problems in the application.

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


