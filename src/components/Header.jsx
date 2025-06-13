import { useContext } from 'react';
import { CalculatorContext } from '../App';

export default function Header() {
  const {
    setMortgageAmount,
    setMortgageTerm,
    setInterestRate,
    setMortgageType,
    setResults,
    setDisplayResults,
  } = useContext(CalculatorContext);

  function clearInputs() {
    setMortgageAmount('');
    setMortgageTerm('');
    setInterestRate('');
    setMortgageType('');
    setResults({
      monthlyRepayments: 0,
      total: 0,
    });
    setDisplayResults(false);
  }

  return (
    <header className='input-section__header'>
      <h1 className='input-section__heading'>Mortgage Calculator</h1>
      <button
        className='input-section__clear-button'
        type='button'
        onClick={clearInputs}
      >
        Clear All
      </button>
    </header>
  );
}
