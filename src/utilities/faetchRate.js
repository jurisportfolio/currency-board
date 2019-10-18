const fetchRateFromNBP = () => fetch("http://api.nbp.pl/api/exrates/rates/a/eur?format=json");

export const getRateFromAPI = () => fetchRateFromNBP;
