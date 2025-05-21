export default function ResultsScreen({ monthlyRepayments, total }) {
  return (
    <section className='results-screen'>
      <header className='results-screen__header'>
        <h2 className='results-screen__heading'>Your results</h2>
        <p className='results-screen__description'>
          Your results are shown below based on the information you provided. To
          adjust the results, edit the form and click "calculate repayments"
          again.
        </p>
      </header>

      <main className='results-screen__main-section'>
        <section className='monthly-repayments'>
          <h3 className='monthly-repayments__heading'>
            Your monthly repayments
          </h3>
          <p className='monthly-repayments__result'>{monthlyRepayments}</p>
        </section>

        <section className='total'>
          <h3 className='total__heading'>Total you'll repay over the term</h3>
          <p className='total__result'>{total}</p>
        </section>
      </main>
    </section>
  );
}
