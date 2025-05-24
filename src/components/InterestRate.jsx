import InputFieldContainer from './InputFieldContainer';

export default function InterestRate() {
  return (
    <div className='input-section__label-input-container'>
      <label htmlFor='interest-rate' className='input-section__label'>
        Interest Rate
      </label>
      <InputFieldContainer unit='%' id='interest-rate' reversed={false} />
    </div>
  );
}
