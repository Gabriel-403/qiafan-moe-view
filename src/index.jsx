import React from 'react';
import ReactDOM from 'react-dom';
import Router from './routers'
import { Provider } from 'react-redux';
import store from './store';
import 'antd/dist/antd.css';
import "./index.scss";
import setAuthToken from "./libs/authActions.js";



  setAuthToken(localStorage.getItem("jwToken"));
ReactDOM.render( 
  <Provider store={store}>
   <Router />
  </Provider>,
  document.getElementById('root')
)

 

