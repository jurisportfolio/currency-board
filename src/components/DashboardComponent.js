import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import ExRateComponent from './ExRateComponent';


class DashboardComponent extends React.Component {
  

  handelRateChange = (newRate) => {

  }

  render() {

    const { exchangeRate } = this.props;
    console.log('this.props: ', this.props);
    console.log('exchangeRate: ', exchangeRate);
    return (
      <StyledDashboard>
        <ExRateComponent exchangeRate={exchangeRate} handelRateChange={this.handelRateChange} />
        
      </StyledDashboard>
    )
  }
}

const StyledDashboard = styled.div`
  
`

const mapStateToProps = state => {
  console.log('state: ', state);

  return {
    exchangeRate: state.exchangeRateReducer.exchangeRate
  }
}

export default connect(mapStateToProps)(DashboardComponent)