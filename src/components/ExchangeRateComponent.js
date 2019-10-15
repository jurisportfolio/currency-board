import React from 'react';

export default class ExchangeRateComponent extends React.Component {
    render() {
        return (
            <div className="exchange-rate_container">
                <label className="exchange-rate_monitor exchange-rate_eur">1 EUR</label>
                <label className="exchange-rate_monitor exchange-rate_pln">X PLN</label>"
            </div>
        )
    }
}
