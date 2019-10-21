import React from 'react';
import { connect } from 'react-redux';

const TransactionsDisplayComponent = ({ transactionsList }) => {
  return(
    <ul>
      {transactionsList.map(
        ({ id, name, amountPLN, amountEUR })=> 
          <li key={id}>
            <label>Nazwa: {name}</label><br/>
            <label>{amountEUR} Euro = {amountPLN} Zł</label>
          </li>
      )}
    </ul>
  )
}

const propsForTransactionsDisplay = state => {
  return {
    transactionsList: state.transactions
  }
}

export default connect(propsForTransactionsDisplay)(TransactionsDisplayComponent)