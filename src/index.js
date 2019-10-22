import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import cantorApp from './utilities/reducers';
import thunk from 'redux-thunk';

import { fetchRate } from './utilities/fetchRate';

import uiKey from './utilities/uuidGenerator';

const transactionUID = uiKey();
const initialTransactions = [{uid: transactionUID, name: "from createStore", amountPLN: 666, amountEUR: 777}]


const preloadedState = {
  exRate: "1.0000",
  transactions: initialTransactions
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  cantorApp,
  preloadedState,
  composeEnhancers(applyMiddleware(thunk))
);

store.dispatch(fetchRate());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')  
);
  
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
