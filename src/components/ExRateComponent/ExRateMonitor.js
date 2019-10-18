import React from 'react';
import { connect } from 'react-redux';

const ExRateMonitor = ({ exRate }) => (
  <div>
    <label>1 EUR</label>
    <label>=</label>
    <label>{exRate} PLN</label>
  </div>
);

const propsMapForExRateMonitor = state => {
  return {
    exRate: state.exRateReducer.exRate
  }
};

export default connect(propsMapForExRateMonitor)(ExRateMonitor);


