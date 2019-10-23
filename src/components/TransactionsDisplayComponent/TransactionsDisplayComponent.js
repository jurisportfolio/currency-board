import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { removeTransaction } from "../../utilities/actions";
import { currencyFormat } from "../../utilities/currencyFormat";

const StyledTransactionsDisplayComponent = styled.ul`
	width: 100%;
	padding: 5px 0 15px 0;
	margin-bottom: 5px;

	list-style: none;
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
						<button onClick={id => removeTransaction(uid)}>-</button>
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
