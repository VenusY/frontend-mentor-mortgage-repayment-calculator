import InputFieldContainer from './InputFieldContainer';
import RadioButton from './RadioButton';
import MortgageAmount from './MortgageAmount';
import MortgageTermAndInterestRate from './MortgageTermAndInterestRate';

export default function Form() {
  return (
    <form className='form'>
      <MortgageAmount />

      <MortgageTermAndInterestRate />

      <label htmlFor='mortgage-type' className='input-section__label'>
        Mortgage Type
      </label>
      <RadioButton label='Repayment' value='repayment' />
      <RadioButton label='Interest Only' value='interest-only' />

      <button type='button' className='calculate-button'>
        <img
          src={require('../assets/images/icon-calculator.svg')}
          alt='Calculator'
          className='calculate-button__icon'
        />
        <span className='calculate-button__text'>Calculate Repayments</span>
      </button>
    </form>
  );
}
