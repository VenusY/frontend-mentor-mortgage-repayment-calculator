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
      }`}
    >
      <input
        type='text'
        value={value}
        onChange={updateValue}
        id={id}
        className='input-field-container__input-field'
      />
      <p className='input-field-container__units-container'>{unit}</p>
    </div>
  );
}
