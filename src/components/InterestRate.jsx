import { useContext } from 'react';
import { CalculatorContext } from '../App';
import InputFieldContainer from './InputFieldContainer';

export default function InterestRate() {
  const { interestRate, setInterestRate } = useContext(CalculatorContext);

  return (
    <div className='input-section__label-input-container'>
      <label htmlFor='interest-rate' className='input-section__label'>
        Interest Rate
      </label>
      <InputFieldContainer
        unit='%'
        id='interest-rate'
        reversed={false}
        value={interestRate}
        valueSetFunction={setInterestRate}
      />
    </div>
  );
}
