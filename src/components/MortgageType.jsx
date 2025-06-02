import { useContext } from 'react';
import { CalculatorContext } from '../App';
import RadioButton from './RadioButton';

export default function MortgageType() {
  const { mortgageType } = useContext(CalculatorContext);

  return (
    <div className='form__container'>
      <label htmlFor='mortgage-type' className='form__label'>
        Mortgage Type
      </label>

      <RadioButton
        label='Repayment'
        value='repayment'
        checked={mortgageType === 'repayment' ? true : false}
      />

      <RadioButton
        label='Interest Only'
        value='interest-only'
        checked={mortgageType === 'interest-only' ? true : false}
      />
    </div>
  );
}
