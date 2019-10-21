export const calcPLNinState = (transactions, exRate) => {
	const newTransactionsList = transactions.map(transaction => {
		const newAmountPLN = transaction.newAmountEUR * exRate;
		return {
			id: transaction.id,
			name: transaction.name,
			amountEUR: transaction.amountEUR,
			amountPLN: newAmountPLN
		};
	});
	console.log("newTransactionsList: ", newTransactionsList);
	return newTransactionsList;
};
