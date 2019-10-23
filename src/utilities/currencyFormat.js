export const currencyFormat = (num, cur) => {
	num = num
		.toFixed(2)
		.replace(".", ",")
		.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
	if (cur == "EUR") {
		num = "€ " + num;
	}
	if (cur == "PLN") {
		num = num + " Zł";
	}

	return num;
};
