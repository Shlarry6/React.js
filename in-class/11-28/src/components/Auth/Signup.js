import { useState, useRef, useContext } from 'react';
import ContactContext from '../../store/contact-context';
import useHttp from '../../hooks/use-http';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
	const {isLoading, error, sendRequest: addNewUser} = useHttp();
	const navigate = useNavigate();
	const ctxContact = useContext(ContactContext);

	const firstNameRef = useRef();
	const lastNameRef = useRef();
	const emailRef = useRef();
	const passwordRef = useRef();
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [fNameTouched, setFNameTouched] = useState(false);
	const [lNameTouched, setLNameTouched] = useState(false);
	const [emailTouched, setEmailTouched] = useState(false);
	const [passwordTouched, setPasswordTouched] = useState(false);

	const [emailIsValid, setEmailIsValid] = useState(true);

	const afterSubmitHandler = () => {
		setFirstName('');
		setFNameTouched(false);
		setLastName('');
		setLNameTouched(false);
		setEmail('');
		setEmailTouched(false);
		setPassword('');
		setPasswordTouched(false);
		navigate("/contactconfirm");
	};
	
	const fNameTouchedHandler = () => {
		setFNameTouched(true);
	}
	const lNameTouchedHandler = () => {
		setLNameTouched(true);
	}
	const emailTouchedHandler = () => {
		setEmailTouched(true);
	}
	const passwordTouchedHandler = () => {
		setPasswordTouched(true);
	}
	const firstNameHandler = (event) => {
		setFirstName(event.target.value);
	}
	const lastNameHandler = (event) => {
		setLastName(event.target.value);
	}
	const emailHandler = (event) => {
		setEmail(event.target.value);
	}
	const passwordHandler = (event) => {
		setPassword(event.target.value);
	}

	const updateAuthCtx = (data) => {
		console.log(data);

		const expTime = new Date(
			new Date().getTime() + (+data.expiresIn * 1000)
		);
		// authCtx.login(data.idToken, expTime.toISOString());
	};
	
	const submitHandler = (event) => {
		event.preventDefault();

		const firstName = firstNameRef.current.value;
		const lastName = lastNameRef.current.value;
		const email = emailRef.current.value;
		const password = passwordRef.current.value;

		if (email.includes('@')) {
			setEmailIsValid(true);
			let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAs89KjyZveFkDaG1X6GDT6P-bLJ9tsDMA';
			let config = {
				url, 
				method: 'POST',
				headers: {'Content-Type': 'application/json'},
				body: {
					email: emailRef,
					password: passwordRef,
					returnSecureToken: true
				}
			}
			addNewUser(config, updateAuthCtx);
			ctxContact.addContactRequest({ firstName: firstName, lastName: lastName, email: email, password: password });
			
			firstNameRef.current.value = '';
			lastNameRef.current.value = '';
			emailRef.current.value = '';
			passwordRef.current.value = '';

			afterSubmitHandler();
		} else {
			setEmailIsValid(false);
		}
	}

	return (
		<>
			<h1>Signup</h1>
			
			<form action="index.html" method="post" className="message" onSubmit={submitHandler}>
				<label>First Name</label>
				<input type="text" ref={firstNameRef} onChange={firstNameHandler} onBlur={fNameTouchedHandler}/>
				<label>Last Name</label>
				<input type="text" ref={lastNameRef} onChange={lastNameHandler} onBlur={lNameTouchedHandler}/>
				<label>Email Address</label>
				<input type="text" ref={emailRef} onChange={emailHandler} onBlur={emailTouchedHandler}/>
				<label>Password</label>
				<input ref={passwordRef} onChange={passwordHandler} onBlur={passwordTouchedHandler} />
				<input type="submit" value="Send Message"/>
				{!emailIsValid && <p>Please enter a valid email address</p>}
			</form>
		</>
	);
}

export default Signup;