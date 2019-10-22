import React from 'react';
import styled, {css} from 'styled-components';
import { connect } from 'react-redux';
import { createSelector } from 'reselect'

const childrenStyle = css`
	label {
		padding: 5px;
	}
	> div {
		padding: 10px 5px;
	}
`;

const StyledTransSumComponent = styled.div`
  display: flex;
	flex-direction: row;
	${childrenStyle}
`;

const TransSumComponent = ({ sumEUR, sumPLN }) => {
  return(
    <StyledTransSumComponent>
      <label>Suma operacji: </label>
      <label>{sumEUR} Euro</label>
      <label>{sumPLN} Zł</label>
    </StyledTransSumComponent>
  )
}

const getTransactions = state => state.transactions;

const getSumEUR = createSelector(
  [ getTransactions ],
  (transactions) => transactions.reduce(
    (sum, transaction) => {
      let newSum = parseFloat(sum) + parseFloat(transaction.amountEUR);
      return newSum.toFixed(2)
    }, 0)
)

const getSumPLN = createSelector(
  [ getTransactions ],
  (transactions) => transactions.reduce(
    (sum, transaction) => {
      let newSum = parseFloat(sum) + parseFloat(transaction.amountPLN);
      return newSum.toFixed(2)
    }, 0)
)

const propsToTransSum = state => {
  return {
    sumEUR: getSumEUR(state),
    sumPLN: getSumPLN(state)
  }
}

export default connect(propsToTransSum)(TransSumComponent)