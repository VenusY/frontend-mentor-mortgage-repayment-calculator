import InputFieldContainer from './InputFieldContainer';
import RadioButton from './RadioButton';

export default function Form() {
  return (
    <form className='form'>
      <label htmlFor='mortgage-amount' className='input-section__label'>
        Mortgage Amount
      </label>
      <InputFieldContainer unit='£' id='mortgage-amount' reversed={true} />

      <div>
        <div className='input-section__label-input-container'>
          <label htmlFor='mortgage-term' className='input-section__label'>
            Mortgage Term
          </label>
          <InputFieldContainer
            unit='years'
            id='mortgage-term'
            reversed={false}
          />
        </div>

        <div className='input-section__label-input-container'>
          <label htmlFor='interest-rate' className='input-section__label'>
            Interest Rate
          </label>
          <InputFieldContainer unit='%' id='interest-rate' reversed={false} />
        </div>
      </div>

      <label htmlFor='mortgage-type' className='input-section__label'>
        Mortgage Type
      </label>
      <RadioButton label='Repayment' value='repayment' />
      <RadioButton label='Interest Only' value='interest-only' />

      <button type='button' className='calculate-button'>
        <img
          src={require('../assets/images/icon-calculator.svg')}
          alt='Calculator'
          className='calculate-button__icon'
        />
        <span className='calculate-button__text'>Calculate Repayments</span>
      </button>
    </form>
  );
}
