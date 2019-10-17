import React from 'react';
import styled, { css } from 'styled-components';

import ExRateMonitor from './ExRateMonitor';

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

  handelSubmit = event => {
    event.preventDefault();
    const newRate = parseFloat(this.state.rateInputValue).toFixed(4);
    this.props.handelRateChange(newRate);
  }

  render() {
    
    const {rateInputValue} = this.state;
    return (
      <StyledExRateComponent>
        <ExRateMonitor 
           />
        
      <form onSubmit={this.handelSubmit} > 
        <label>
          Rate:
          <input type="text" name="name" value={rateInputValue} onChange={this.onChangeInputValue} />
        </label>
        <input type="submit" value="Set rate" />
      </form>

      <div><label>GET</label></div>
      </StyledExRateComponent>
    )
  }
}



