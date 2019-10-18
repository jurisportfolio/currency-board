import { combineReducers } from 'redux';
import { SET_RATE, FETCH_RATE_SUCCESS } from './actions';

const initialState = {
  exRate: 4.2789
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

const cantorApp = combineReducers({
    exRateReducer
})

export default cantorApp;