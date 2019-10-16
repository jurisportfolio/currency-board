import { combineReducers } from 'redux';
import { SET_RATE } from './actions';

function exchangeRateReducer(state = [], action) {
  switch (action.type) {
    case SET_RATE: 
      return [
        ...state,
        {
          rateValue: action.rateValue 
        }
      ]
    default:
        return state  
  }
}

const cantorApp = combineReducers({
    exchangeRateReducer
})

export default cantorApp;