import React from 'react';
import { connect } from 'react-redux';

const ExRateDisplay = ({ exRate }) => (
  <div>
    <label>1 EUR</label>
    <label>=</label>
    <label>{exRate} PLN</label>
  </div>
);

const propsMapForExRateDisplay = state => {
  return {
    exRate: state.exRate.exRate
  }
};

export default connect(propsMapForExRateDisplay)(ExRateDisplay);


