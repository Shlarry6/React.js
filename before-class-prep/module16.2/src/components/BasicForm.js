import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  let formIsValid = false;
  const {
    value: fNameValue,
    isValid: fNameValid,
    hasError: fNameHasError,
    valueChangeHandler: fNameChangeHandler,
    inputBlurHandler: fNameBlurHandler,
    reset: fNameReset,
  } = useInput(value => value.trim() !== '');
  const {
    value: lNameValue,
    isValid: lNameValid,
    hasError: lNameHasError,
    valueChangeHandler: lNameChangeHandler,
    inputBlurHandler: lNameBlurHandler,
    reset: lNameReset,
  } = useInput(value => value.trim() !== '');
  const {
    value: emailValue,
    isValid: emailValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput(value => value.includes('@'));

  if (fNameValid && lNameValid && emailValid) {
    formIsValid = true;
  };

  const onSubmitHandler = (event) => {
    event.PreventDefault();

    if (!formIsValid) {
      return;
    };

    fNameReset();
    lNameReset();
    emailReset();
  };

  let fNameClasses = fNameHasError ? 'form-control invalid' : 'form-control';
  let lNameClasses = lNameHasError ? 'form-control invalid' : 'form-control';
  let emailClasses = emailHasError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={onSubmitHandler}>
      <div className='control-group'>
        <div className={fNameClasses}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' onChange={fNameChangeHandler} onBlur={fNameBlurHandler} value={fNameValue}/>
          {fNameHasError && <span style={{color: 'red'}}>First Name is invalid.</span>}
        </div>
        <div className={lNameClasses}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' onChange={lNameChangeHandler} onBlur={lNameBlurHandler} value={lNameValue}/>
          {lNameHasError && <span style={{color: 'red'}}>Last Name is invalid.</span>}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' onChange={emailChangeHandler} onBlur={emailBlurHandler} value={emailValue}/>
        {emailHasError && <span style={{color: 'red'}}>Email is invalid.</span>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;


