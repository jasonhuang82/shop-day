import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// redux
import {createStore,applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducer';
// saga
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas'

import registerServiceWorker from './registerServiceWorker';


const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  rootReducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga)
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('root'));
registerServiceWorker();
