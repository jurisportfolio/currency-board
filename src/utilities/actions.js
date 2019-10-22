export const SET_RATE = 'SET_RATE';
export const ADD_TRANSACTION = 'ADD_TRANSACTION';
export const REMOVE_TRANSACTION = 'REMOVE_TRANSACTION';

export const FETCH_RATE_BEGIN = 'FETCH_RATE_BEGIN';
export const FETCH_RATE_SUCCESS = 'FETCH_RATE_SUCCESS';
export const FETCH_RATE_CURRENCY_ERROR = 'FETCH_RATE_CURRENCY_ERROR';
export const FETCH_RATE_FAILURE = 'FETCH_RATE_FAILURE';

export const addTransaction = transaction => ({
  type: ADD_TRANSACTION,
  transaction
})

export const removeTransaction = uid => ({
  type: REMOVE_TRANSACTION,
  uid
})

export const setRate = exRate => ({
  type: SET_RATE,
  exRate
})

export const fetchRateBegin = () => ({
  type: FETCH_RATE_BEGIN
})

export const fetchRateSuccess = exRate => ({
  type: FETCH_RATE_SUCCESS,
  exRate
})

export const fetchRateCurrencyError = currencyCode => ({
  type: FETCH_RATE_CURRENCY_ERROR
})

export const fetchRateFailure = error => ({
  type: FETCH_RATE_FAILURE
})