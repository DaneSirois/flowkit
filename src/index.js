// Import dependencies:
import registerServiceWorker from './registerServiceWorker';
import { RI } from 'npm-redux-interfaces';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

// Import the rootReducer:
import { rootReducer } from './interfaces/index';

// Import Router:
import Root_router from './routes/index';

// Import Middleware:
import middleware from './middleware/index';

// Import Styles:
import './root_style.css';

// Build Middleware:
const middlewareList = [middleware.localStorage];

// Build store with middleware:
const store = applyMiddleware(...middlewareList)(createStore)(rootReducer);

// Give RI access to the store:
RI.setStore(store);

setTimeout(() => {
  // Simulate an initial delay for any initialization logic;
  RI.app.SET_LOADING(false);
}, 1500);

// Mount the root router:
ReactDOM.render(
  <Provider store={store}>
    {Root_router}
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
