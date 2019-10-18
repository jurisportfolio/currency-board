import React from 'react';
import styled, { css } from 'styled-components';

import ExRateMonitor from './ExRateMonitor';
import ExRateSetter from './ExRateSetter';
import ExRateFetcher from './ExRateFetcher';

const labelStyle = css`
  label {
    padding: 5px;
  }
`

const StyledExRateComponent = styled.div`
  display: flex;
  flex-direction: row;
  
  width: 100%;
  padding: 5px 10px;
  ${labelStyle}
`

export default class ExRateComponent extends React.Component {

  state = { rateInputValue: "0.0000" }
  
  onChangeInputValue = event => {
    this.setState({
      rateInputValue: event.target.value
    })
  }
  
  render() {
    return (
      <StyledExRateComponent>
        <ExRateMonitor />
        <ExRateSetter />
        <ExRateFetcher />
      </StyledExRateComponent>
    )
  }
}



