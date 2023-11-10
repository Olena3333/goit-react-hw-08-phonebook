import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import store from 'redux/store';

import { App } from 'components/App';
import './index.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/goit-react-hw-08-phonebook">
    <React.StrictMode>
      <Provider store={store}>
        <App />
        <ToastContainer autoClose={1000} />
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
);