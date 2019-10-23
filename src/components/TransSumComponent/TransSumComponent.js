import React from "react";
import styled, { css } from "styled-components";
import { connect } from "react-redux";
import { createSelector } from "reselect";
import { currencyFormat } from "../../utilities/currencyFormat";

const childrenStyle = css`
	label {
		padding: 5px;
	}
	> div {
		padding: 10px 5px;
	}
`;

const StyledTransSumComponent = styled.div`
	display: flex;
	flex-direction: row;
	${childrenStyle}
`;

const TransSumComponent = ({ sumEUR, sumPLN }) => {
	sumEUR = currencyFormat(sumEUR, "EUR");
	sumPLN = currencyFormat(sumPLN, "PLN");
	return (
		<StyledTransSumComponent>
			<label>Suma operacji: </label>
			<label>{sumEUR}</label> <label>{sumPLN}</label>
		</StyledTransSumComponent>
	);
};

const getTransactions = state => state.transactions;

const getSumEUR = createSelector(
	[getTransactions],
	transactions =>
		transactions.reduce(
			(sum, transaction) => sum + transaction.amountEUR,
			// {
			// 	let newSum = parseFloat(sum) + parseFloat(transaction.amountEUR);
			// 	return newSum.toFixed(2);
			// }
			0
		)
);

const getSumPLN = createSelector(
	[getTransactions],
	transactions =>
		transactions.reduce(
			(sum, transaction) => sum + transaction.amountPLN,
			// {
			// 	let newSum = parseFloat(sum) + parseFloat(transaction.amountPLN);
			// 	return newSum.toFixed(2);
			// }
			0
		)
);

const propsToTransSum = state => {
	return {
		sumEUR: getSumEUR(state),
		sumPLN: getSumPLN(state)
	};
};

export default connect(propsToTransSum)(TransSumComponent);
