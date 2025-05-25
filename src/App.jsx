import './styles/reset.css';
import { createContext, useState } from 'react';
import InputSection from './components/InputSection';
import ResultsSection from './components/ResultsSection';

const CalculatorContext = createContext(null);

export default function App() {
  const [mortgageAmount, setMortgageAmount] = useState(null);
  const [mortgageTerm, setMortgageTerm] = useState(null);
  const [interestRate, setInterestRate] = useState(null);
  const [mortgageType, setMortgageType] = useState(null);
  const [displayResults, setDisplayResults] = useState(false);

  function updateMortgageAmount(e) {
    setMortgageAmount(e.currentTarget.value);
  }

  function updateMortgageTerm(e) {
    setMortgageTerm(e.currentTarget.value);
  }

  function updateInterestRate(e) {
    setInterestRate(e.currentTarget.value);
  }

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
        displayResults,
        setDisplayResults,
      }}
    >
      <div className='calculator'>
        <InputSection />
        <ResultsSection displayResults={displayResults} />
      </div>
    </CalculatorContext.Provider>
  );
}
