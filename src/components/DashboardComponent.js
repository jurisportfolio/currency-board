import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import ExRateComponent from './ExRateComponent/ExRateComponent';
import NewTransactionComponent from './NewTransactionComponent/NewTransactionComponent';

const StyledDashboard = styled.div`
  
`

class DashboardComponent extends React.Component {
  
  render() {
    return (
      <StyledDashboard>
        <ExRateComponent />
        <NewTransactionComponent />
      </StyledDashboard>
    )
  }
}

export default connect()(DashboardComponent)