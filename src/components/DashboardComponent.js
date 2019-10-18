import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import ExRateComponent from './ExRateComponent';

const StyledDashboard = styled.div`
  
`

class DashboardComponent extends React.Component {
  
  render() {
    return (
      <StyledDashboard>
        <ExRateComponent />
      </StyledDashboard>
    )
  }
}

export default connect()(DashboardComponent)