import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from './config/store';
// import App from './App';
import Task from "./features/task/Task"


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <Task />
        {/* <App /> */}
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
