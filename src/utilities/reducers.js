import { combineReducers } from 'redux';
import { SET_RATE } from './actions';

const initialState = {
  exchangeRate: 4.2789
}



function exchangeRateReducer(state = initialState, action) {
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