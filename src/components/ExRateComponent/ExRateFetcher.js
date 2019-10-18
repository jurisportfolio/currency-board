import React from 'react';
import { connect } from 'react-redux';

import { fetchRate } from '../../utilities/fetchRate';

class ExRateFetcher extends React.Component {
  
  handelOnClick = () => {
    this.props.dispatch(fetchRate());
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

// const dispatchForExRateFetcher =  fetchRate();

export default connect()(ExRateFetcher);
