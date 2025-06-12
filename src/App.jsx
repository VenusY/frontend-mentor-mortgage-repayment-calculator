import './styles/reset.css';
import './styles/scss/App.scss';
import { createContext, useState } from 'react';
import InputSection from './components/InputSection';
import ResultsSection from './components/ResultsSection';

export const CalculatorContext = createContext(null);

export default function App() {
  const [mortgageAmount, setMortgageAmount] = useState('');
  const [mortgageTerm, setMortgageTerm] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [mortgageType, setMortgageType] = useState('');
  const [valid, setValid] = useState({
    mortgageAmount: true,
    mortgageTerm: true,
    interestRate: true,
    mortgageType: true,
  });
  const [displayError, setDisplayError] = useState({
    mortgageAmount: false,
    mortgageTerm: false,
    interestRate: false,
    mortgageType: false,
  });
  const [displayResults, setDisplayResults] = useState(false);
  const [results, setResults] = useState({
    monthlyRepayments: 0,
    total: 0,
  });

  return (
    <CalculatorContext.Provider
      value={{
        mortgageAmount,
        setMortgageAmount,
        mortgageTerm,
        setMortgageTerm,
        interestRate,
        setInterestRate,
        mortgageType,
        setMortgageType,
        valid,
        setValid,
        displayError,
        setDisplayError,
        displayResults,
        setDisplayResults,
        results,
        setResults,
      }}
    >
      <div className='calculator'>
        <InputSection />
        <ResultsSection displayResults={displayResults} />
      </div>
    </CalculatorContext.Provider>
  );
}
