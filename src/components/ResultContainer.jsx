export default function ResultContainer({ category, heading, result }) {
  return (
    <section className={category}>
      <h3 className={`${category}__heading`}>{heading}</h3>
      <p className={`${category}__result`}>{result}</p>
    </section>
  );
}
