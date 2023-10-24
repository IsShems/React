import React, { Component } from 'react';

class CurrencyConverter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sourceCurrency: 'USD', 
      targetCurrency: 'EUR', 
      amount: 1,
      exchangeRate: 0.85, 
    };
  }

  handleSourceCurrencyChange = (event) => {
    this.setState({ sourceCurrency: event.target.value });
  };

  handleTargetCurrencyChange = (event) => {
    this.setState({ targetCurrency: event.target.value });
  };

  handleAmountChange = (event) => {
    this.setState({ amount: event.target.value });
  };

  calculateConvertedAmount = () => {
    const { amount, exchangeRate } = this.state;
    return (amount * exchangeRate).toFixed(2);
  };

  render() {
    const { sourceCurrency, targetCurrency, amount } = this.state;

    return (
      <div>
        <h2>Currency Converter</h2>
        <select
  value={sourceCurrency}
  onChange={this.handleSourceCurrencyChange}
  aria-label="Source Currency"
>
  <option value="USD">USD</option>
  <option value="EUR">EUR</option>
  <option value="RUB">RUB</option>
</select>
        <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={this.handleAmountChange}
        />
        <select
  value={targetCurrency}
  onChange={this.handleTargetCurrencyChange}
  aria-label="Target Currency" 
>
  <option value="USD">USD</option>
  <option value="EUR">EUR</option>
  <option value="RUB">RUB</option>
</select>
        <p>Converted Amount: {this.calculateConvertedAmount()} {targetCurrency}</p>
      </div>
    );
  }
}

export default CurrencyConverter;
