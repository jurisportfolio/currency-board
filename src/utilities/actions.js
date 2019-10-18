export const SET_RATE = 'SET_RATE';
export const ADD_TRANSACTION = 'ADD_TRANSACTION';
export const REMOVE_TRANSACTION = 'REMOVE_TRANSACTION';
export const FETCH_RATE_SUCCESS = 'FETCH_RATE_SUCCESS';

export const setRate = exRate => ({
  type: SET_RATE,
  exRate
})