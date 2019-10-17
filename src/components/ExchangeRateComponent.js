import React, { Fragment } from 'react';
import styled, { css } from 'styled-components';

const ExchangeRateMonitor = ({ exchangeRate, rateInputValue, onChangeInputValue, handelSubmit }) => (
  <Fragment>
    <div>
      <label>1 EUR</label>
      <label>=</label>
      <label>{exchangeRate} PLN</label>
    </div>

    <form onSubmit={handelSubmit} > 
      <label>
        Rate:
        <input type="text" name="name" value={rateInputValue} onChange={onChangeInputValue} />
      </label>
      <input type="submit" value="Set rate" />
    </form>

    <div><label>GET</label></div>
  </Fragment>
)




export default class ExchangeRateComponent extends React.Component {

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
    const { exchangeRate } = this.props;
    const {rateInputValue} = this.state;
    return (
      <StyledExchangeRateComponent>
        <ExchangeRateMonitor 
          exchangeRate={exchangeRate} 
          rateInputValue={rateInputValue}
          onChangeInputValue={this.onChangeInputValue}
          handelSubmit={this.handelSubmit} />
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

