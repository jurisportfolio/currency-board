import React from 'react';
import { connect } from 'react-redux';

import { setRate } from '../../utilities/actions';

const ExRateSetter = ({ exRate, setRate }) => {

  let rateInput = React.createRef();
  
  const handelSubmit = event => {
    event.preventDefault();
    const newRate = parseFloat(rateInput.current.value).toFixed(4);
    rateInput.current.value = newRate;
    setRate(newRate);
  }

  return(
    <div>
      <form onSubmit={handelSubmit} > 
        <label>
          Rate:
          <input 
            type="number" 
            name="rate" 
            step="0.0001"
            defaultValue={exRate} 
            ref={rateInput} 
          />
        </label>
        <input type="submit" value="Set rate" />
      </form>
    </div>
  )
}

const propsForExRateSetter = state => {
  return(
    {
      exRate: state.exRateReducer.exRate
    }
  )
}

const dispatchForExRateSetter = { setRate };

export default connect(
                propsForExRateSetter, 
                dispatchForExRateSetter)(ExRateSetter);