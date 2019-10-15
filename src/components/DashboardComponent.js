import React from 'react';
import ExchangeRateComponent from './ExchangeRateComponent';

export default class DashboardComponent extends React.Component {
    state = {
        exchangeRate: 1
    }
    render() {
        const { exchangeRate } = this.state;
        return (
            <div>
                <h1>{exchangeRate}</h1>
                <ExchangeRateComponent/>
            </div>
        )
    }
}