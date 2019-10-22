import React from 'react';
import styled, { css } from 'styled-components';
import { connect } from 'react-redux';

import { addTransaction } from '../../utilities/actions';
import uiKey from '../../utilities/uuidGenerator';

const childrenStyle = css`
* {
  margin: 5px;
}
`

const StyledNewTransactionComponent = styled.div`
  border-bottom: solid 2px white;
  width: 100%;
  padding: 5px 0 15px 0;
  margin-bottom: 5px;
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
    const transactionUID = uiKey();
    const calculatedAmountPLN = parseFloat(event.target.newTransactionAmountEUR.value) * this.props.exRate;
    const transaction = {
      uid:        transactionUID,
      name:       event.target.newTransactionName.value,
      amountEUR:  event.target.newTransactionAmountEUR.value,
      amountPLN:  calculatedAmountPLN.toFixed(2)

    }
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
      exRate: state.exRate
    }
  )
}

const dispatchForNewTransaction = { addTransaction };

export default connect(propsForNewTransaction, dispatchForNewTransaction)(NewTransactionComponent);