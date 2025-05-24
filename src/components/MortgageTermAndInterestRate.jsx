import InputFieldContainer from './InputFieldContainer';

export default function MortgageTermAndInterestRate() {
  return (
    <div>
      <div className='input-section__label-input-container'>
        <label htmlFor='mortgage-term' className='input-section__label'>
          Mortgage Term
        </label>
        <InputFieldContainer unit='years' id='mortgage-term' reversed={false} />
      </div>

      <div className='input-section__label-input-container'>
        <label htmlFor='interest-rate' className='input-section__label'>
          Interest Rate
        </label>
        <InputFieldContainer unit='%' id='interest-rate' reversed={false} />
      </div>
    </div>
  );
}
