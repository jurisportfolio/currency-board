import React from 'react';
import styled from 'styled-components';

import ExchangeRateComponent from './ExchangeRateComponent';


export default class DashboardComponent extends React.Component {
  state = {
    exchangeRate: 4.2789
  }

  handelRateChange = (newRate) => {
    this.setState({
      exchangeRate: newRate
    })
  }

  render() {
    let { exchangeRate } = this.state;
    return (
      <StyledDashboard>
        <ExchangeRateComponent exchangeRate={exchangeRate} handelRateChange={this.handelRateChange} />
        
      </StyledDashboard>
    )
  }
}

const StyledDashboard = styled.div`
  
`