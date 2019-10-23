import React from "react";
import { connect } from "react-redux";
import styled, { css } from "styled-components";

import { removeTransaction } from "../../utilities/actions";
import { currencyFormat } from "../../utilities/currencyFormat";

const ulChildren = css`
	li {
		padding: 10px 0;
	}

	li > label {
		margin: 0 10px;
	}

	li > button {
		font-size: 16px;
		background-color: red;
		color: white;
	}
`;

const StyledTransactionsDisplayComponent = styled.ul`
	width: 100%;
	padding: 5px 0 15px 0;
	margin-bottom: 5px 0;
	margin-block-start: 0;

	list-style: none;

	${ulChildren}
`;

const TransactionsDisplayComponent = ({
	transactionsList,
	removeTransaction
}) => {
	return (
		<StyledTransactionsDisplayComponent>
			{transactionsList.map(({ uid, name, amountPLN, amountEUR }) => {
				amountPLN = currencyFormat(amountPLN, "PLN");
				amountEUR = currencyFormat(amountEUR, "EUR");
				// amountPLN = amountPLN.toFixed(2).toString();
				// amountEUR = amountEUR.toFixed(2).toString();
				return (
					<li key={uid}>
						<label>Nazwa: {name}</label>
						<br />
						<label>
							{amountEUR} = {amountPLN}
						</label>
						<button onClick={id => removeTransaction(uid)}>wykasuj</button>
					</li>
				);
			})}
		</StyledTransactionsDisplayComponent>
	);
};

const propsForTransactionsDisplay = state => {
	return {
		transactionsList: state.transactions
	};
};

const dispatchForTransactionsDisplay = { removeTransaction };

export default connect(
	propsForTransactionsDisplay,
	dispatchForTransactionsDisplay
)(TransactionsDisplayComponent);
