import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import '../src/bootstrap.min.css' 
import { Provider } from 'react-redux';

import { BrowserRouter } from 'react-router-dom'
import { store } from './app/Store'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <React.StrictMode>
  <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  </BrowserRouter>
)