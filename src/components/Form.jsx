import '../styles/scss/Form.scss';
import MortgageAmount from './MortgageAmount';
import MortgageTermAndInterestRate from './MortgageTermAndInterestRate';
import MortgageType from './MortgageType';
import CalculateButton from './CalculateButton';

export default function Form() {
  return (
    <form className='form'>
      <div className='form__input-fields'>
        <MortgageAmount />
        <MortgageTermAndInterestRate />
        <MortgageType />
      </div>

      <CalculateButton />
    </form>
  );
}
