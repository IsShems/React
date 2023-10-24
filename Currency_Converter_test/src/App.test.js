import { render, fireEvent, screen } from '@testing-library/react';
import CurrencyConverter from './App';
import '@testing-library/jest-dom/extend-expect'; 


test('CurrencyConverter component renders without errors', () => {
    render(<CurrencyConverter />);
    const currencyConverterElement = screen.getByText('Currency Converter', { selector: 'h2' });
    expect(currencyConverterElement).toBeInTheDocument();
  });  

test('Currency conversion works correctly', () => {
  render(<CurrencyConverter />);
  
  const amountInput = screen.getByPlaceholderText('Amount');
  const sourceCurrencySelect = screen.getByRole('combobox', { name: 'Source Currency' });
  const targetCurrencySelect = screen.getByRole('combobox', { name: 'Target Currency' });
  
  fireEvent.change(amountInput, { target: { value: 100 } });
  fireEvent.change(sourceCurrencySelect, { target: { value: 'USD' } });
  fireEvent.change(targetCurrencySelect, { target: { value: 'EUR' } });

  const convertedAmountText = screen.getByText((content, element) => {
    return content.startsWith('Converted Amount:');
  });
  expect(convertedAmountText).toHaveTextContent('85.00 EUR');
});
