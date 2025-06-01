import '../styles/scss/RadioButton.scss';
import { useContext } from 'react';
import { CalculatorContext } from '../App';

export default function RadioButton({ label, value }) {
  const { setMortgageType } = useContext(CalculatorContext);

  function updateMortgageType() {
    setMortgageType(value);
  }

  return (
    <div className='radio-button__container'>
      <label htmlFor={value} className='radio-button__label'>
        {label}
      </label>
      <input
        type='radio'
        name='mortgage-type'
        value={value}
        onChange={updateMortgageType}
        id={value}
        className='radio-button'
      />
    </div>
  );
}
