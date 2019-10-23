import React from "react";
import styled, { css } from "styled-components";
import { connect } from "react-redux";
import { createSelector } from "reselect";
import { currencyFormat } from "../../utilities/currencyFormat";

const children = css`
	h5 {
		margin-block-start: 0.8em;
		margin-block-end: 0.8em;
	}
`;

const StyledBiggestTrans = styled.div`
	color: red;
	margin: 10px 0;
	padding: 0 5px;
	${children}
`;

const BiggestTransComponent = ({ biggestTransaction }) => {
	let { name, amountPLN, amountEUR } = biggestTransaction;
	amountEUR = currencyFormat(amountEUR, "EUR");
	amountPLN = currencyFormat(amountPLN, "PLN");
	// amountPLN = amountPLN.toFixed(2).toString() + " Zł";
	// amountEUR = "€ " + amountEUR.toFixed(2).toString();
	return (
		<StyledBiggestTrans>
			<h5>Największa</h5>
			<label>{name}</label>
			<br />
			<label>{amountPLN}</label>
			<br />
			<label>{amountEUR}</label>
		</StyledBiggestTrans>
	);
};

const getTransactions = state => state.transactions;

const getBiggestTrans = createSelector(
	[getTransactions],
	transactions => {
		let biggest = {
			amountPLN: 0,
			transactionToReturn: {
				name: "Brak transacji",
				amountEUR: 0,
				amountPLN: 0
			}
		};

		biggest = transactions.reduce((biggest, transaction) => {
			return biggest.amountPLN > transaction.amountPLN
				? biggest
				: {
						amountPLN: transaction.amountPLN,
						transactionToReturn: transaction
				  };
		}, biggest);
		return biggest.transactionToReturn;
	}
);

const propsForBiggestTransComponent = state => {
	return {
		biggestTransaction: getBiggestTrans(state)
	};
};

export default connect(propsForBiggestTransComponent)(BiggestTransComponent);
