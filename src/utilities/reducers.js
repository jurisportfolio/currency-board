import { combineReducers } from 'redux';
import { SET_RATE, FETCH_RATE_SUCCESS } from './actions';
import { ADD_TRANSACTION } from './actions';

const initialState = {
  exRate: "0.0000",
  transactions: [{transactionName: "first", transactionAmountPLN: "666", transactionAmountEUR: "777"}]
  
}

function exRateReducer(state = initialState, action) {
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

function transactionsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TRANSACTION:
      console.log(action);
      return state
    default:
      return state
  }
}

const cantorApp = combineReducers({
    exRateReducer,
    transactionsReducer
})

export default cantorApp;