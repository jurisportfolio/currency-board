import React from "react";
import { connect } from "react-redux";

import { setRate } from "../../utilities/actions";

const ExRateSetter = ({ exRate, setRate }) => {
	let rateInput = React.createRef();

	const handelSubmit = event => {
		event.preventDefault();
		setRate(parseFloat(rateInput.current.value));
	};

	return (
		<div>
			<form onSubmit={handelSubmit}>
				<label>
					Rate:
					<input
						type="number"
						name="rate"
						step="0.0001"
						max="999999"
						min="0.0001"
						defaultValue={exRate}
						ref={rateInput}
					/>
				</label>
				<input className="submit-button" type="submit" value="Set rate" />
			</form>
		</div>
	);
};

const propsForExRateSetter = state => {
	return {
		exRate: state.exRate
	};
};

const dispatchForExRateSetter = { setRate };

export default connect(
	propsForExRateSetter,
	dispatchForExRateSetter
)(ExRateSetter);
