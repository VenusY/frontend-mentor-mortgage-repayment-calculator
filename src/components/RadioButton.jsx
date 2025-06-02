import '../styles/scss/RadioButton.scss';
import { useContext } from 'react';
import { CalculatorContext } from '../App';

export default function RadioButton({ label, value, checked }) {
  const { setMortgageType } = useContext(CalculatorContext);

  function updateMortgageType() {
    setMortgageType(value);
  }

  return (
    <label
      className={`radio-button__container ${
        checked ? 'radio-button__container--checked' : ''
      }`}
    >
      <span htmlFor={value} className='radio-button__label'>
        {label}
      </span>
      <input
        type='radio'
        name='mortgage-type'
        value={value}
        onChange={updateMortgageType}
        id={value}
        className='radio-button'
      />
    </label>
  );
}
