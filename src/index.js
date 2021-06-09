import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyApp from './components/App';
//import reportWebVitals from './reportWebVitals';
//we will use a Provder so that all the components that need the store can reach to it
import {Provider } from 'react-redux'
import { createStore } from 'redux'

// we will import all reducers and middleware here
import reducer from './reducers/index'
import middleware from './middleware'

//we will create our store
const store = createStore (reducer,middleware)
ReactDOM.render(
  <Provider store={store}>
    <MyApp />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

