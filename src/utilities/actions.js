export const SET_RATE = 'SET_RATE';
export const ADD_TRANSACTION = 'ADD_TRANSACTION';
export const REMOVE_TRANSACTION = 'REMOVE_TRANSACTION';

export const setRate = exchangeRate => ({
  type: SET_RATE,
  exchangeRate
})