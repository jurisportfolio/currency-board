import React from 'react';
import { connect } from 'react-redux';

const ExRateMonitor = ({ exchangeRate }) => (
  <div>
    <label>1 EUR</label>
    <label>=</label>
    <label>{exchangeRate} PLN</label>
  </div>
);

const propsMapForExRateMonitor = state => {
  return {
    exchangeRate: state.exchangeRateReducer.exchangeRate
  }
};

export default connect(propsMapForExRateMonitor)(ExRateMonitor);


