import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { removeTransaction } from "../../utilities/actions";

const StyledTransactionsDisplayComponent = styled.ul`
	border-bottom: solid 2px white;
	width: 100%;
	padding: 5px 0 15px 0;
	margin-bottom: 5px;

	list-style: none;
`;

const TransactionsDisplayComponent = ({
	transactionsList,
	removeTransaction
}) => {
	console.log("removeTransaction: ", removeTransaction);

	return (
		<StyledTransactionsDisplayComponent>
			{transactionsList.map(({ uid, name, amountPLN, amountEUR }) => {
				console.log("uid: ", uid);
				return (
					<li key={uid}>
						<label>Nazwa: {name}</label>
						<br />
						<label>
							{amountEUR} Euro = {amountPLN} Zł
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
