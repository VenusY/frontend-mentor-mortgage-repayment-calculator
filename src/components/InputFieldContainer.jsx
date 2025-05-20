export default function InputFieldContainer({ unit, id, reversed }) {
  return (
    <div
      className={`input-field-container ${
        reversed ? 'input-field-container--reversed' : ''
      }`}
    >
      <div className='input-field-container__units-container'>{unit}</div>
      <input
        type='text'
        id={id}
        className='input-field-container__input-field'
      />
    </div>
  );
}
