import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import App from './App';

// Renders the App component on index.html (id root), in this case we'll use Strict mode to detect potential problems in the application.
// Router must contain the App 

ReactDOM.render(
  <React.StrictMode>
    <Router>
        <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


