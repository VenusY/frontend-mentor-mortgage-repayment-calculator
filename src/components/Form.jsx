import MortgageAmount from './MortgageAmount';
import MortgageTermAndInterestRate from './MortgageTermAndInterestRate';
import MortgageType from './MortgageType';

export default function Form() {
  return (
    <form className='form'>
      <MortgageAmount />
      <MortgageTermAndInterestRate />
      <MortgageType />

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
