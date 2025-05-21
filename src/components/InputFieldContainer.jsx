export default function InputFieldContainer({ unit, id, reversed }) {
  return (
    <div
      className={`input-field-container ${
        reversed ? 'input-field-container--reversed' : ''
      }`}
    >
      <input
        type='text'
        id={id}
        className='input-field-container__input-field'
      />
      <p className='input-field-container__units-container'>{unit}</p>
    </div>
  );
}
