import {
	fetchRateBegin,
	setRate,
	fetchRateCurrencyError,
	fetchRateFailure
} from "./actions";

const NBP_QUERY = "http://api.nbp.pl/api/exchangerates/rates/a/eur?format=json";

export const fetchRate = () => {
	return dispatch => {
		dispatch(fetchRateBegin());
		return fetch(NBP_QUERY)
			.then(res => (!res.ok ? alert("Brak połączenia z NBP") : res))
			.then(res => res.json())
			.then(json => {
				if (json.code === "EUR") {
					dispatch(setRate(json.rates[0].mid));
				} else {
					dispatch(fetchRateCurrencyError(json.code));
				}
			})
			.catch(
				() => alert("Brak połączenia z NBP")
				// dispatch(fetchRateFailure(error))
			);
	};
};
