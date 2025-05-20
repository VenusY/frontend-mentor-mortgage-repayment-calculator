export default function InputFieldContainer({ unit, id }) {
  return (
    <div className='input-field-container'>
      <div className='input-field-container__units-container'>{unit}</div>
      <input
        type='text'
        id={id}
        className='input-field-container__input-field'
      />
    </div>
  );
}
