import React from 'react';
import { connect } from 'react-redux';
import { removeTransaction } from '../../utilities/actions';

const TransactionsDisplayComponent = ({ transactionsList, removeTransaction }) => {
  console.log('removeTransaction: ', removeTransaction);
  
  return(
    <ul>
      {transactionsList.map(
        ({ uid, name, amountPLN, amountEUR })=> {
          console.log("uid: ",uid);
          return(
          <li key={uid}>
            <label>Nazwa: {name}</label><br/>
            <label>{amountEUR} Euro = {amountPLN} Zł</label>
            <button onClick={(id)=>removeTransaction(uid)} >-</button>
          </li>)}
      )}
    </ul>
  )
}

const propsForTransactionsDisplay = state => {
  return {
    transactionsList: state.transactions
  }
}

const dispatchForTransactionsDisplay = { removeTransaction };

export default connect(propsForTransactionsDisplay, dispatchForTransactionsDisplay)(TransactionsDisplayComponent)