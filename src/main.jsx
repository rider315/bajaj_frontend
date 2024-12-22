import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'



import './App.css';
// import Header from './components/Header';
// import TodoForm from './components/TodoForm';
// import Todos from './components/Todos';
// import { Provider } from 'react-redux';
// import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
// import reportWebVitals from './reportWebVitals';
import store from './redux/store';
// const root = ReactDOM.createRoot(document.getElementById('root'));
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>

  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
)
