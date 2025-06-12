import '../styles/scss/ResultsScreen.scss';
import ResultContainer from './ResultContainer';
import { useContext } from 'react';
import { CalculatorContext } from '../App';

export default function ResultsScreen() {
  const { results } = useContext(CalculatorContext);

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
        <ResultContainer
          category='monthly-repayments'
          heading='Your monthly repayments'
          result={results.monthlyRepayments}
        />

        <ResultContainer
          category='total'
          heading={`Total you'll repay over the term`}
          result={results.total}
        />
      </main>
    </section>
  );
}
