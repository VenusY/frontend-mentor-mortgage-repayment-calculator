import InputFieldContainer from './InputFieldContainer';

export default function MortgageAmount() {
  return (
    <>
      <label htmlFor='mortgage-amount' className='input-section__label'>
        Mortgage Amount
      </label>
      <InputFieldContainer unit='£' id='mortgage-amount' reversed={true} />
    </>
  );
}
