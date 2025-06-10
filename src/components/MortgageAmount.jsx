import { useContext } from 'react';
import { CalculatorContext } from '../App';
import InputFieldContainer from './InputFieldContainer';
import ErrorMessage from './ErrorMessage';

export default function MortgageAmount() {
  const { mortgageAmount, setMortgageAmount, valid } =
    useContext(CalculatorContext);

  return (
    <div className='form__container'>
      <label htmlFor='mortgage-amount' className='form__label'>
        Mortgage Amount
      </label>

      <InputFieldContainer
        unit='£'
        id='mortgage-amount'
        reversed={true}
        value={mortgageAmount}
        valueSetFunction={setMortgageAmount}
        valid={valid.mortgageAmount}
      />

      <ErrorMessage display={!mortgageAmount && !valid.mortgageAmount} />
    </div>
  );
}
