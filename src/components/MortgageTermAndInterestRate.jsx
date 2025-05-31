import MortgageTerm from './MortgageTerm';
import InterestRate from './InterestRate';

export default function MortgageTermAndInterestRate() {
  return (
    <div className='form__container'>
      <MortgageTerm />
      <InterestRate />
    </div>
  );
}
