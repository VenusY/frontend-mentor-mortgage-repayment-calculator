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
  const [displayResults, setDisplayResults] = useState(false);

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
