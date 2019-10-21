import { combineReducers } from 'redux';
import { SET_RATE, FETCH_RATE_SUCCESS } from './actions';
import { ADD_TRANSACTION } from './actions';

import uiKey from './uuidGenerator';

const initialExRate = "0.0000";

const transactionUID = uiKey();
const initialTransactions = [{id: transactionUID, name: "form reducer", amountPLN: "666", amountEUR: "777"}]

function exRate(state = initialExRate, action) {
  switch (action.type) {
    case SET_RATE: 
      return action.exRate
        
    case FETCH_RATE_SUCCESS:
      return action.exRate
      
    default:
        return state  
  }
}

function transactions(state = initialTransactions, action) {
  switch (action.type) {
    case ADD_TRANSACTION:
      console.log("action: ", action);

      return [...state, action.transaction]
    default:
      return state
  }
}

const cantorApp = combineReducers({
    exRate,
    transactions
})

export default cantorApp;