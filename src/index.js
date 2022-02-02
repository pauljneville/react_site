import React from 'react';
import ReactDOM from 'react-dom';

import './styles/index.css';
import './styles/dogBlog.css';
import './styles/plantPurchase.css';
import './styles/foodBook.css';
import './styles/dogTrain.css';
import App from './App';
import { AuthProvider } from './hooks/useAuth';
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
