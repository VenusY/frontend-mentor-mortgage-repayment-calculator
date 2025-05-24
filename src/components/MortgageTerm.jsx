import InputFieldContainer from './InputFieldContainer';

export default function MortgageTerm() {
  return (
    <div className='input-section__label-input-container'>
      <label htmlFor='mortgage-term' className='input-section__label'>
        Mortgage Term
      </label>
      <InputFieldContainer unit='years' id='mortgage-term' reversed={false} />
    </div>
  );
}
