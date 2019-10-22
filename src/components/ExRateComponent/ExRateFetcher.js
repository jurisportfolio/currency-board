import React from 'react';
import { connect } from 'react-redux';

import { fetchRate } from '../../utilities/fetchRate';


class ExRateFetcher extends React.Component {
	handelOnClick = () => {
		this.props.dispatch(fetchRate());
	};

	render() {
		return (
			<div>
				<label>Aktualny kurs NBP</label>
				<input type="button" value="Pobierz" onClick={this.handelOnClick} />
			</div>
		);
	}
}

const propsForExRateFetcher = state => {
	return {
		transactions: state.transactions,
		exRate: state.exRate
	};
};

// const dispatchForExRateFetcher = { setNewAmountPLN };

export default connect(
	propsForExRateFetcher
	// , dispatchForExRateFetcher
  )(ExRateFetcher);
