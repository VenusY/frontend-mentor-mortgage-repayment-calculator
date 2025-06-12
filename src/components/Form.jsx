import '../styles/scss/Form.scss';
import { useContext } from 'react';
import { CalculatorContext } from '../App';
import MortgageAmount from './MortgageAmount';
import MortgageTermAndInterestRate from './MortgageTermAndInterestRate';
import MortgageType from './MortgageType';
import CalculateButton from './CalculateButton';

export default function Form() {
  const {
    mortgageAmount,
    mortgageTerm,
    interestRate,
    mortgageType,
    setValid,
    setDisplayError,
  } = useContext(CalculatorContext);

  function validateInputs() {
    const amountRegex = /^(\d+|\.\d{1,2}|\d+\.\d{1,2})$/;
    const termRegex = /^\d+$/;
    const interestRateRegex = /^(\d+|\.\d+|\d+\.\d+)$/;

    setValid({
      mortgageAmount: mortgageAmount.match(amountRegex) ? true : false,
      mortgageTerm: mortgageTerm.match(termRegex) ? true : false,
      interestRate: interestRate.match(interestRateRegex) ? true : false,
      mortgageType: mortgageType ? true : false,
    });

    setDisplayError({
      mortgageAmount: !mortgageAmount ? true : false,
      mortgageTerm: !mortgageTerm ? true : false,
      interestRate: !interestRate ? true : false,
      mortgageType: !mortgageType ? true : false,
    });
  }

  function calculate() {}

  return (
    <form
      className='form'
      onSubmit={(e) => {
        e.preventDefault();
        validateInputs();
        calculate();
      }}
    >
      <div className='form__input-fields'>
        <MortgageAmount />
        <MortgageTermAndInterestRate />
        <MortgageType />
      </div>

      <CalculateButton />
    </form>
  );
}
