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

      <div className='input-section__input-field-container'>
        <div className='input-section__units-container'></div>
        <input
          type='text'
          id='mortgage-amount'
          className='input-section__input-field'
        />
      </div>

      <div>
        <div className='input-section__label-input-container'>
          <label htmlFor='mortgage-term' className='input-section__label'>
            Mortgage Term
          </label>

          <div className='input-section__input-field-container'>
            <div className='input-section__units-container'></div>
            <input
              type='text'
              id='mortgage-term'
              className='input-section__input-field'
            />
          </div>
        </div>

        <div className='input-section__label-input-container'>
          <label htmlFor='interest-rate' className='input-section__label'>
            Interest Rate
          </label>

          <div className='input-section__input-field-container'>
            <div className='input-section__units-container'></div>
            <input
              type='text'
              id='interest-rate'
              className='input-section__input-field'
            />
          </div>
        </div>
      </div>

      <label htmlFor='mortgage-type' className='input-section__label'>
        Mortgage Type
      </label>

      <input
        type='radio'
        name='mortgage-type'
        value='Repayment'
        className='input-section__input-field'
      />

      <input
        type='radio'
        name='mortgage-type'
        value='Interest Only'
        className='input-section__input-field'
      />

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
