import React from 'react';
import ReactDOM from 'react-dom';

import './styles/index.css';
import './styles/dogBlog.css';
import './styles/plantPurchase.css';
import './styles/foodBook.css';
import './styles/dogTrain.css';
import App from './App';
import { AuthProvider } from './hooks/useAuth';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
