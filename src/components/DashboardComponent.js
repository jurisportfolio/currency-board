import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import ExRateComponent from './ExRateComponent/ExRateComponent';
import NewTransactionComponent from './NewTransactionComponent/NewTransactionComponent';
import TransactionsDisplayComponent from './TransactionsDisplayComponent/TransactionsDisplayComponent';
import TransSumComponent from './TransSumComponent/TransSumComponent'

const StyledDashboard = styled.div`
  
`

class DashboardComponent extends React.Component {
  
  render() {
    return (
      <StyledDashboard>
        <ExRateComponent />
        <NewTransactionComponent />
        <TransactionsDisplayComponent />
        <TransSumComponent />
      </StyledDashboard>
    )
  }
}

export default connect()(DashboardComponent)