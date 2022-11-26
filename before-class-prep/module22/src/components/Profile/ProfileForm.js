import { useRef, useContext } from 'react';
import AuthContext from '../../store/auth-context';
import classes from './ProfileForm.module.css';
import { useNavigate } from 'react-router-dom';

const ProfileForm = () => {
  const navigate = useNavigate();
  const newPasswordInputRef = useRef();
  const authCtx = useContext(AuthContext);

  const submitHandler = event => {
    event.preventDefault();

    const enteredNewPassword = newPasswordInputRef.current.value;

    // VALIDATE HERE

    fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBN1ZZmAH8ki5lFRSQZ8BF-gJrg79ivEa8', {
      method: 'POST',
      body: JSON.stringify({
        idToken: authCtx.token,
        password: enteredNewPassword,
        returnSecureToken: false
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      // add handling here for success
      navigate("/");
    })
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' minLength="7" ref={newPasswordInputRef} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
