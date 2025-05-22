import './styles/reset.css';
import { useState } from 'react';
import InputSection from './components/InputSection';
import ResultsSection from './components/ResultsSection';

export default function App() {
  const [mortgageAmount, setMortgageAmount] = useState(null);
  const [mortgageTerm, setMortgageTerm] = useState(null);
  const [interestRate, setInterestRate] = useState(null);
  const [mortgageType, setMortgageType] = useState(null);
  const [monthlyRepayments, setMonthlyRepayments] = useState(null);
  const [total, setTotal] = useState(null);
  const [displayResults, setDisplysResults] = useState(false);

  return (
    <div className='calculator'>
      <InputSection />
      <ResultsSection displayResults={displayResults} />
    </div>
  );
}
