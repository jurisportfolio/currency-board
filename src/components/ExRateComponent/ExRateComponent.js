import React from 'react';
import styled, { css } from 'styled-components';

import ExRateMonitor from './ExRateMonitor';
import ExRateSetter from './ExRateSetter';
import ExRateFetcher from './ExRateFetcher';

const childrenStyle = css`
  label {
    padding: 5px;
  }
  > div {
    padding: 10px 5px;
  }
`

const StyledExRateComponent = styled.div`
  display: flex;
  flex-direction: row;
  
  border-bottom: solid 2px white;

  width: 100%;
  padding: 5px 10px;
  margin-bottom: 10px;
  ${childrenStyle}
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



