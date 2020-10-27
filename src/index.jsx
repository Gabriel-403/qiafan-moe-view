import React from 'react';
import ReactDOM from 'react-dom';
import Router from './routers'
import { Provider } from 'react-redux';
import store from './store';



import 'antd/dist/antd.css';
import "./index.scss";




ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById('root')
);

