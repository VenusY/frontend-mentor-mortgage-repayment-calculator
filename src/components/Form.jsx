import MortgageAmount from './MortgageAmount';
import MortgageTermAndInterestRate from './MortgageTermAndInterestRate';
import MortgageType from './MortgageType';
import CalculateButton from './CalculateButton';

export default function Form() {
  return (
    <form className='form'>
      <MortgageAmount />
      <MortgageTermAndInterestRate />
      <MortgageType />
      <CalculateButton />
    </form>
  );
}
