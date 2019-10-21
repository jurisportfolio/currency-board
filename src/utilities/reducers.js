import { combineReducers } from 'redux';
import { SET_RATE, FETCH_RATE_SUCCESS } from './actions';
import { ADD_TRANSACTION } from './actions';

const initialExRate = "0.0000";

const initialTransactions = {
  
  transactions: [{transactionName: "first", transactionAmountPLN: "666", transactionAmountEUR: "777"}]
  
}

function exRate(state = initialExRate, action) {
  switch (action.type) {
    case SET_RATE: 
      return {
        exRate: action.exRate
        }
    case FETCH_RATE_SUCCESS:
      return {
        exRate: action.exRate
      }
    default:
        return state  
  }
}

function transactionsReducer(state = initialTransactions, action) {
  switch (action.type) {
    case ADD_TRANSACTION:
      console.log(action);
      return state
    default:
      return state
  }
}

const cantorApp = combineReducers({
    exRate,
    transactionsReducer
})

export default cantorApp;