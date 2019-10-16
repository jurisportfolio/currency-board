import React from 'react';
import styled from 'styled-components';

import ExchangeRateComponent from './ExchangeRateComponent';


export default class DashboardComponent extends React.Component {
  state = {
    exchangeRate: 1
  }
  render() {
    const { exchangeRate } = this.state;
    return (
      <StyledDashboard>
        <ExchangeRateComponent exchangeRate={exchangeRate}/>
        
      </StyledDashboard>
    )
  }
}

const StyledDashboard = styled.div`
  
`