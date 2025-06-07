import '../styles/scss/ResultContainer.scss';

export default function ResultContainer({ category, heading, result }) {
  return (
    <section className={category}>
      <h3 className='result-container__heading'>{heading}</h3>
      <p className={`${category}__result`}>{result}</p>
    </section>
  );
}
