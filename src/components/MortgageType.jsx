import RadioButton from './RadioButton';

export default function MortgageType() {
  return (
    <>
      <label htmlFor='mortgage-type' className='input-section__label'>
        Mortgage Type
      </label>
      <RadioButton label='Repayment' value='repayment' />
      <RadioButton label='Interest Only' value='interest-only' />
    </>
  );
}
