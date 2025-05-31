import RadioButton from './RadioButton';

export default function MortgageType() {
  return (
    <div className='form__container'>
      <label htmlFor='mortgage-type' className='form__label'>
        Mortgage Type
      </label>
      <RadioButton label='Repayment' value='repayment' />
      <RadioButton label='Interest Only' value='interest-only' />
    </div>
  );
}
