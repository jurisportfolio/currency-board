import { fetchRateBegin, 
         fetchRateSuccess, 
         fetchRateCurrencyError, 
         fetchRateFailure } from './actions';

const NBP_QUERY = 'http://api.nbp.pl/api/exchangerates/rates/a/eur?format=json';

export const fetchRate = () => {
  return(
    dispatch => {
      dispatch(fetchRateBegin());
      return fetch(NBP_QUERY)
        .then(res => res.json())
        .then(json => {
          if (json.code === "EUR") {
            console.log("RATE:", json.rates[0].mid);
            dispatch(fetchRateSuccess(json.rates[0].mid))
          } else {
            dispatch(fetchRateCurrencyError(json.code))
          }
        })
        .catch(error => dispatch(fetchRateFailure(error)))
    }
  )
}