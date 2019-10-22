import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import { createSelector } from 'reselect'

const StyledBiggestTrans = styled.div`
  color: red;
`;

const BiggestTransComponent = ({biggestTransaction}) => {
  let { name, amountPLN, amountEUR } = biggestTransaction;
  amountPLN = amountPLN.toFixed(2).toString();
	amountEUR = amountEUR.toFixed(2).toString();
  return(
    <StyledBiggestTrans>
      <h4>Największa</h4>
      <label>{name}</label><br/>
      <label>{amountPLN} Zł</label><br/>
      <label>{amountEUR} Euro</label>
    </StyledBiggestTrans>
  )
}

const getTransactions = state => state.transactions;

const getBiggestTrans = createSelector(
  [getTransactions],
  (transactions) => {
    const biggest = transactions.reduce(
      
      (biggest, transaction) => {
        return biggest.amountPLN > transaction.amountPLN 
          ? biggest 
          : {amountPLN: transaction.amountPLN, transactionToReturn: transaction}
      }, {amountPLN: 0, transactionToReturn: null}
    )
    return biggest.transactionToReturn
  }
)

const propsForBiggestTransComponent = state => {
  return {
    biggestTransaction: getBiggestTrans(state)
  }
}

export default connect(propsForBiggestTransComponent)(BiggestTransComponent)