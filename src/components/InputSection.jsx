import Form from './Form';

export default function InputSection() {
  return (
    <section className='input-section'>
      <header className='input-section__header'>
        <h1 className='input-section__heading'>Mortgage Calculator</h1>
        <button className='input-section__clear-button'>Clear All</button>
      </header>

      <Form />
    </section>
  );
}
