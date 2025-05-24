export default function RadioButton({ label, value }) {
  return (
    <div className='input-section__radio-button'>
      <label htmlFor={value} className='input-section__radio-label'>
        {label}
      </label>
      <input
        type='radio'
        name='mortgage-type'
        value={value}
        id={value}
        className='input-section__input-field'
      />
    </div>
  );
}
