import { useContext } from 'react';
import { CalculatorContext } from '../App';

export default function RadioButton({ label, value }) {
  const { setMortgageType } = useContext(CalculatorContext);

  function updateMortgageType() {
    setMortgageType(value);
  }

  return (
    <div className='input-section__radio-button'>
      <label htmlFor={value} className='input-section__radio-label'>
        {label}
      </label>
      <input
        type='radio'
        name='mortgage-type'
        value={value}
        onChange={updateMortgageType}
        id={value}
        className='input-section__input-field'
      />
    </div>
  );
}
