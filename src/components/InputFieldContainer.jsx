export default function InputFieldContainer() {
  return (
    <div className='input-field-container'>
      <div className='input-field-container__units-container'></div>
      <input
        type='text'
        id={id}
        className='input-field-container__input-field'
      />
    </div>
  );
}
