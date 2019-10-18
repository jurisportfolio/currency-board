import React from 'react';
import { connect } from 'react-redux';

import { setRate } from '../utilities/actions';

const ExRateSetter = ({ exRate, setRate }) => {
  let rateInput = React.createRef();

  const handelSubmit = event => {
    event.preventDefault();
    const newRate = parseFloat(rateInput.current.value).toFixed(4);
    rateInput.current.value = newRate;
    setRate(newRate);
  }

  return(
    <form onSubmit={handelSubmit} > 
      <label>
        Rate:
        <input type="text" name="name" defaultValue={exRate} ref={rateInput} />
      </label>
      <input type="submit" value="Set rate" />
    </form>
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

export default connect(propsForExRateSetter, dispatchForExRateSetter)(ExRateSetter);