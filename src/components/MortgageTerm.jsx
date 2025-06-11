import { useContext } from 'react';
import { CalculatorContext } from '../App';
import InputFieldContainer from './InputFieldContainer';
import ErrorMessage from './ErrorMessage';

export default function MortgageTerm() {
  const { mortgageTerm, setMortgageTerm, valid, displayError } =
    useContext(CalculatorContext);

  return (
    <div className='form__inner-container'>
      <label htmlFor='mortgage-term' className='form__label'>
        Mortgage Term
      </label>

      <InputFieldContainer
        unit='years'
        id='mortgage-term'
        reversed={false}
        value={mortgageTerm}
        valueSetFunction={setMortgageTerm}
        valid={valid.mortgageTerm}
      />

      <ErrorMessage display={displayError.mortgageTerm} />
    </div>
  );
}
