import { useState, useContext } from 'react';
import {useNavigate} from 'react-router-dom';
import './Authenticate.css';

import useInput from '../../hooks/use-input';
import useHttp from '../../hooks/use-http';
import Main from '../UI/Main/Main';
import AuthContext from '../../store/auth-context';

const Authenticate = () => {
	const navigate = useNavigate();
	const [isUser, setIsUser] = useState(true);
	const {isLoading, error, sendRequest:submitSignUp} = useHttp();
	const [formIsSubmitted, setFormIsSubmitted] = useState(false);
	// Create state variable to store user data
	const updateAuthContext = (userData) => {
		const expirationTime = new Date(
			new Date().getTime() + +userData.expiresIn * 1000
		  );
		  authCtx.login(userData.idToken, expirationTime.toISOString());
	}
	// Import context
	const authCtx = useContext(AuthContext);

	// Define validation functions for form inputs
	// These will be passed to the useInput hook
	const isNotEmpty = (value) => value.trim() !== '';
	const isEmail = (value) => value.includes('@');

	// Call useInput hook to manage state for all form inputs
	const {
		value: firstNameValue,
		isValid: firstNameIsValid,
		hasError: firstNameHasError,
		valueChangeHandler: firstNameHandler,
		inputBlurHandler: firstNameBlurHandler,
		reset: resetFirstName,
	} = useInput(isNotEmpty);
	const {
		value: lastNameValue,
		isValid: lastNameIsValid,
		hasError: lastNameHasError,
		valueChangeHandler: lastNameHandler,
		inputBlurHandler: lastNameBlurHandler,
		reset: resetLastName,
	} = useInput(isNotEmpty);
	const {
		value: emailValue,
		isValid: emailIsValid,
		hasError: emailHasError,
		valueChangeHandler: emailHandler,
		inputBlurHandler: emailBlurHandler,
		reset: resetEmail,
	} = useInput(isEmail);

	const {
		value: passwordValue,
		isValid: passwordIsValid,
		hasError: passwordHasError,
		valueChangeHandler: passwordHandler,
		inputBlurHandler: passwordBlurHandler,
		reset: resetPassword,
	} = useInput(isNotEmpty);

	let formIsValid = false;

	if (isUser) {
		if (emailIsValid && passwordIsValid) {
			formIsValid = true;
		}
	} else {
		if (firstNameIsValid && lastNameIsValid && emailIsValid && passwordIsValid) {
			formIsValid = true;
		}
	}

	const submitHandler = (event) => {
		event.preventDefault();

		// Check form validity
		if (!formIsValid) {
			return;
		}
		let url;
		if (isUser) {
			url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAs89KjyZveFkDaG1X6GDT6P-bLJ9tsDMA";
		} else {
			url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAs89KjyZveFkDaG1X6GDT6P-bLJ9tsDMA";
		}

		// Use useHttp to send a request to firebase auth
		let requestConfig = {
			url: url,
			method: "POST",
			headers: {'Content-Type': 'application/json'},
			body: {email: emailValue, password: passwordValue, returnSecureToken: true}
		}
		submitSignUp(requestConfig, updateAuthContext);
		setFormIsSubmitted(true);
		// Save contact request using values from hook
		
		//ctxContact.addContactRequest({ firstName: firstNameValue, lastName: lastNameValue, email: emailValue, password: passwordValue });

		// Use hook functions to reset inputs
		resetFirstName();
		resetLastName();
		resetEmail();
		resetPassword();

		//navigate("/contactconfirm", {replace:true});

		setTimeout(() => {
			if (isUser) {
				navigate('/', {replace:true});
			} else {
				setFormIsSubmitted(false);
				togglePageStateHandler();
			}
		}, 2000);
	}

	const togglePageStateHandler = () => {
		setIsUser((prevState) => {
			return !prevState;
		});
	}

	// Use values provided by hook in JSX
	return (
		<Main>
			<h1>{isUser ? 'Login': 'Signup'}</h1>
			
			<form action="index.html" method="post" className="message" onSubmit={submitHandler}>
				{!isUser && <label>First Name</label>}
				{!isUser && <input type="text" onBlur={firstNameBlurHandler} onChange={firstNameHandler} value={firstNameValue} className={firstNameHasError ? "error" : ''} />}
				{!isUser && <label>Last Name</label>}
				{!isUser && <input type="text" onBlur={lastNameBlurHandler} onChange={lastNameHandler} value={lastNameValue} className={lastNameHasError ? "error" : ''} />}
				<label>Email Address</label>
				<input type="text" onBlur={emailBlurHandler} onChange={emailHandler} value={emailValue} className={emailHasError ? "error" : ''} />
				<label>Password</label>
				<input type="password" onBlur={passwordBlurHandler} onChange={passwordHandler} value={passwordValue} className={passwordHasError ? "error" : ''}></input>
				<input disabled={!formIsValid} type="submit" value={isUser ? 'Login' : 'Signup'} />
			</form>
			<button onClick={togglePageStateHandler}>{isUser ? 'Not a user? Signup' : 'Already a user? Login'}</button>

			{isLoading && !error && <p>Loading...</p>}
			{!isLoading && error && <p>Oops... Something went wrong!</p>}
			{!isLoading && !error && formIsSubmitted && <p>Success! Redirecting you now...</p>}
		</Main>
	);
}

export default Authenticate;