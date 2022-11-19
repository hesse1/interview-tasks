import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  </BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
