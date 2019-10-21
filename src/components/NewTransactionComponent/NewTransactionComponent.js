import React from 'react';
import styled, { css } from 'styled-components';
import { connect } from 'react-redux';

import { addTransaction } from '../../utilities/actions';

const childrenStyle = css`
* {
  margin: 5px;
}
`

const StyledNewTransactionComponent = styled.div`
  ${childrenStyle}
`

class NewTransactionComponent extends React.Component { 

  state = {
    newTransactionName: "New Transaction", 
    newTransactionAmountEUR: "450"
  }

  onNewTransactionNameChange = event => {
    this.setState({
      newTransactionName: event.target.value
    })
  }

  onNewTransactionAmountChange = event => {
    this.setState({
      newTransactionAmountEUR: event.target.value
    })
  }

  onSubmitTransaction = event => {
    event.preventDefault();
    const calculatedAmountPLN = parseFloat(event.target.newTransactionAmountEUR.value) * this.props.exRate;
    console.log('this.props.exRate: ', this.props.exRate);
    const transaction = {
      name:       event.target.newTransactionName.value,
      amountEUR:  event.target.newTransactionAmountEUR.value,
      amountPLN:  calculatedAmountPLN.toFixed(4)

    }
    console.log(transaction);
    this.props.addTransaction(transaction)
  }

  render(){
    const { newTransactionAmountEUR, newTransactionName } = this.state;
    return(
      <StyledNewTransactionComponent>
        <div>
          <label>{newTransactionName}</label>
          <label>{newTransactionAmountEUR}</label>
        </div>
        <div>
          <form onSubmit={this.onSubmitTransaction}>
            <label>Nazwa</label>
            <input type="text" 
                   name="newTransactionName" 
                   value={newTransactionName} 
                   onChange={this.onNewTransactionNameChange} />
            <label>Kwota</label>
            <input type="number" 
                   name="newTransactionAmountEUR" 
                   value={newTransactionAmountEUR} 
                   onChange={this.onNewTransactionAmountChange} />
            <input type="submit"
                   value="+" />
          </form>
        </div>
      </StyledNewTransactionComponent>)}}

const propsForNewTransaction = state => {
  return(
    {
      exRate: state.exRate.exRate
    }
  )
}

const dispatchForNewTransaction = { addTransaction };

export default connect(propsForNewTransaction, dispatchForNewTransaction)(NewTransactionComponent);