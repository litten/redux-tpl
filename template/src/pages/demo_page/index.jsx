require('../../assets/polyfill');
import React from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import reduces from './reducers';
import Container from './container';

let store;
if (process.env.NODE_ENV === 'development') {
  store = createStore(reduces, undefined, compose(
    applyMiddleware(thunkMiddleware),
    window['devToolsExtension'] ? window['devToolsExtension']() : f => f
  ));
} else {
  store = createStore(reduces, undefined, applyMiddleware(thunkMiddleware));
}

ReactDom.render(
  <Provider store={store}>
    <Container/>
  </Provider>,
  window.document.getElementById('react-body')
);
