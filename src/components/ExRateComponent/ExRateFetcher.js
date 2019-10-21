import React from 'react';
import { connect } from 'react-redux';

import { fetchRate, setNewAmount } from '../../utilities/fetchRate';
import { calcPLNinState } from '../../utilities/calculations';

class ExRateFetcher extends React.Component {
  
  handelOnClick = () => {
    this.props.dispatch(fetchRate());
    this.props.setNewAmount(this.props.)
  }

  render(){
    return(
      <div>
        <label>Aktualny kurs NBP</label>
        <input 
          type='button' 
          value='Pobierz'
          onClick={this.handelOnClick} />
      </div>
    )}
}

const propsForExRateFetcher = state => {
  return {
    transactions: state.transactions,
    exRate: state.exRate
  }
  
}

const dispatchForExRateFetcher =  setNewAmount();

export default connect(propsForExRateFetcher, dispatchForExRateFetcher)(ExRateFetcher);
