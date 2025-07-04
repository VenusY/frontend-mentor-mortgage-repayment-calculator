import { useContext } from 'react';
import { CalculatorContext } from '../App';
import InputFieldContainer from './InputFieldContainer';
import ErrorMessage from './ErrorMessage';

export default function InterestRate() {
  const { interestRate, setInterestRate, valid, displayError } =
    useContext(CalculatorContext);

  return (
    <div className='form__inner-container'>
      <label htmlFor='interest-rate' className='form__label'>
        Interest Rate
      </label>

      <InputFieldContainer
        unit='%'
        id='interest-rate'
        reversed={false}
        value={interestRate}
        valueSetFunction={setInterestRate}
        valid={valid.interestRate}
      />

      <ErrorMessage display={displayError.interestRate} />
    </div>
  );
}
