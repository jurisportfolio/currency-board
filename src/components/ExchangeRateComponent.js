import React from 'react';
import styled, { css } from 'styled-components';

export default class ExchangeRateComponent extends React.Component {
  render() {
    const rate = this.props.exchangeRate;
    return (
      <StyledExchangeRateComponent>
        <div>
          <label>1 EUR</label>
          <label>=</label>
          <label>{rate} PLN</label>
        </div>

        
        <div>
          <input initialValue={rate}></input>
          <label>SET</label>    
        </div>
        <div><label>GET</label></div>
      </StyledExchangeRateComponent>
    )
  }
}

const labelStyle = css`
  label {
    padding: 5px;
  }
`

const StyledExchangeRateComponent = styled.div`
  display: flex;
  flex-direction: row;
  
  width: 100%;
  padding: 5px 10px;
  ${labelStyle}
`

