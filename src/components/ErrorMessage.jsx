export default function ErrorMessage({ display }) {
  return (
    <p
      className={`form__error-message ${
        display ? 'form__error-message--visible' : ''
      }`}
    >
      This field is required
    </p>
  );
}
