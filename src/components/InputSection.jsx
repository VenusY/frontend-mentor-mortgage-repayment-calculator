import InputFieldContainer from './InputFieldContainer';
import RadioButton from './RadioButton';

export default function InputSection() {
  return (
    <section className='input-section'>
      <header className='input-section__header'>
        <h1 className='input-section__heading'>Mortgage Calculator</h1>
        <button className='input-section__clear-button'>Clear All</button>
      </header>

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

      <button className='calculate-button'>
        <img
          src={require('../assets/images/icon-calculator.svg')}
          alt='Calculator'
          className='calculate-button__icon'
        />
        <span className='calculate-button__text'>Calculate Repayments</span>
      </button>
    </section>
  );
}
