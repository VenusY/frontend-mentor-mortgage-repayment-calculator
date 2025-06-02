import '../styles/scss/InputFieldContainer.scss';

export default function InputFieldContainer({
  unit,
  id,
  reversed,
  value,
  valueSetFunction,
}) {
  function updateValue(e) {
    valueSetFunction(e.currentTarget.value);
  }

  return (
    <div
      className={`input-field-container ${
        reversed ? 'input-field-container--reversed' : ''
      } ${value ? 'input-field-container--active' : ''}`}
    >
      <input
        type='text'
        value={value}
        onChange={updateValue}
        id={id}
        className='input-field-container__input-field'
      />
      <p
        className={`input-field-container__unit ${
          value ? 'input-field-container__unit--active' : ''
        }`}
      >
        {unit}
      </p>
    </div>
  );
}
