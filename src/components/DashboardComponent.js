import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import ExRateComponent from "./ExRateComponent/ExRateComponent";
import NewTransactionComponent from "./NewTransactionComponent/NewTransactionComponent";
import TransactionsDisplayComponent from "./TransactionsDisplayComponent/TransactionsDisplayComponent";
import BiggestTransComponent from "./TransactionsDisplayComponent/BiggestTransDisplayComponent";
import TransSumComponent from "./TransSumComponent/TransSumComponent";

const StyledDashboard = styled.div`
	margin: 10px;
	padding: 10px;
`;

const StyledTransactionPanel = styled.div`
	display: flex;
	flex-direction: row;
	border-bottom: solid 2px white;
`;

class DashboardComponent extends React.Component {
	render() {
		return (
			<StyledDashboard>
				<ExRateComponent />
				<NewTransactionComponent />

				<StyledTransactionPanel>
					<TransactionsDisplayComponent />
					<BiggestTransComponent />
				</StyledTransactionPanel>

				<TransSumComponent />
			</StyledDashboard>
		);
	}
}

export default connect()(DashboardComponent);
