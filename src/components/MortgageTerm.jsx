import { useContext } from 'react';
import { CalculatorContext } from '../App';
import InputFieldContainer from './InputFieldContainer';

export default function MortgageTerm() {
  const { mortgageTerm, setMortgageTerm } = useContext(CalculatorContext);

  return (
    <div className='input-section__label-input-container'>
      <label htmlFor='mortgage-term' className='input-section__label'>
        Mortgage Term
      </label>
      <InputFieldContainer
        unit='years'
        id='mortgage-term'
        reversed={false}
        value={mortgageTerm}
        valueSetFunction={setMortgageTerm}
      />
    </div>
  );
}
