import '../styles/scss/CalculateButton.scss';

export default function CalculateButton() {
  return (
    <button type='submit' className='calculate-button'>
      <img
        src={require('../assets/images/icon-calculator.svg')}
        alt='Calculator'
        className='calculate-button__icon'
      />
      <span className='calculate-button__text'>Calculate Repayments</span>
    </button>
  );
}
