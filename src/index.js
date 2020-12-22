import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import appStore from './_store/store';
import App from './App';
import './assets/scss/main.scss';

import reportWebVitals from './reportWebVitals';

// Create redux store with history
const initialState = {};
const store = appStore(initialState);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
