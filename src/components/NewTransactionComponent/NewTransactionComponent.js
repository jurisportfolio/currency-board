import React from "react";
import styled, { css } from "styled-components";
import { connect } from "react-redux";

import { addTransaction } from "../../utilities/actions";
import uiKey from "../../utilities/uuidGenerator";
import { currencyFormat } from "../../utilities/currencyFormat";

const childrenStyle = css`
	* {
		margin: 5px;
	}
	/* .submit-button {
		background-color: green;
		color: white;
		font-size: 16px;
	} */
`;

const StyledNewTransactionComponent = styled.div`
	border-bottom: solid 2px white;
	width: 100%;
	padding: 5px 0 15px 0;
	margin-bottom: 5px;
	${childrenStyle}
`;

class NewTransactionComponent extends React.Component {
	state = {
		newTransactionName: "New Transaction",
		newTransactionAmountEUR: 450.0
	};

	onNewTransactionNameChange = event => {
		this.setState({
			newTransactionName: event.target.value
		});
	};

	onNewTransactionAmountChange = event => {
		this.setState({
			newTransactionAmountEUR: parseFloat(event.target.value)
		});
	};

	onSubmitTransaction = event => {
		event.preventDefault();
		const transactionUID = uiKey();
		const newTransactionName = this.state.newTransactionName;
		const newTransactionAmountEUR = parseFloat(
			this.state.newTransactionAmountEUR
		);
		const calculatedAmountPLN = newTransactionAmountEUR * this.props.exRate;
		const transaction = {
			uid: transactionUID,
			name: newTransactionName,
			amountEUR: newTransactionAmountEUR,
			amountPLN: calculatedAmountPLN
		};
		this.props.addTransaction(transaction);
	};

	render() {
		const { newTransactionAmountEUR, newTransactionName } = this.state;
		let displayedName = newTransactionName ? newTransactionName : "Bez nazwy";
		let displayedAmountEUR = newTransactionAmountEUR
			? newTransactionAmountEUR
			: 0;
		displayedAmountEUR = currencyFormat(displayedAmountEUR, "EUR");
		return (
			<StyledNewTransactionComponent>
				<div>
					<label>{displayedName}</label>
					<label>{displayedAmountEUR}</label>
				</div>
				<div>
					<form onSubmit={this.onSubmitTransaction}>
						<label>Nazwa</label>
						<input
							type="text"
							name="newTransactionName"
							value={newTransactionName}
							onChange={this.onNewTransactionNameChange}
						/>
						<br />
						<label>Kwota</label>
						<input
							type="number"
							step="0.01"
							max="999999"
							min="0.01"
							name="newTransactionAmountEUR"
							value={newTransactionAmountEUR}
							onChange={this.onNewTransactionAmountChange}
						/>
						<input className="submit-button" type="submit" value="dodaj" />
					</form>
				</div>
			</StyledNewTransactionComponent>
		);
	}
}

const propsForNewTransaction = state => {
	return {
		exRate: state.exRate
	};
};

const dispatchForNewTransaction = { addTransaction };

export default connect(
	propsForNewTransaction,
	dispatchForNewTransaction
)(NewTransactionComponent);
