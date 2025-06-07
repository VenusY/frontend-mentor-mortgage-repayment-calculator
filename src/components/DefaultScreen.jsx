import '../styles/scss/DefaultScreen.scss';

export default function DefaultScreen() {
  return (
    <section className='default-screen'>
      <img
        src={require('../assets/images/illustration-empty.svg')}
        alt='Sheet and calculator'
        className='default-screen__hero-image'
      />
      <h2 className='default-screen__heading'>Results shown here</h2>
      <p className='default-screen__description'>
        Complete the form and click "calculate repayments" to see what your
        monthly repayments would be.
      </p>
    </section>
  );
}
