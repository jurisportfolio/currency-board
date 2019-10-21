import { combineReducers } from 'redux';
import { SET_RATE, FETCH_RATE_SUCCESS } from './actions';
import { ADD_TRANSACTION } from './actions';

const initialExRate = "0.0000";

const initialTransactions = [{name: "first", amountPLN: "666", amountEUR: "777"}]

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