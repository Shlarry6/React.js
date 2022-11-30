import { useState, useContext } from 'react';
import {useNavigate} from 'react-router-dom';
import './ContactForm.css';

import ContactContext from '../../store/contact-context';
import useInput from '../../hooks/use-input';
import Main from '../UI/Main/Main';

const ContactForm = () => {

	const navigate = useNavigate();

	const [formSubmitted, setFormSubmitted] = useState(false);

	// Import context
	const ctxContact = useContext(ContactContext);

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
		value: messageValue,
		isValid: messageIsValid,
		hasError: messageHasError,
		valueChangeHandler: messageHandler,
		inputBlurHandler: messageBlurHandler,
		reset: resetMessage,
	} = useInput(isNotEmpty);

	let formIsValid = false;

	if (firstNameIsValid && lastNameIsValid && emailIsValid && messageIsValid) {
		formIsValid = true;
	}



	const submitHandler = (event) => {
		event.preventDefault();

		// Check form validity
		if (!formIsValid) {
			return;
		}

		// Save contact request using values from hook
		ctxContact.addContactRequest({ firstName: firstNameValue, lastName: lastNameValue, email: emailValue, message: messageValue });

		// Use hook functions to reset inputs
		resetFirstName();
		resetLastName();
		resetEmail();
		resetMessage();

		navigate("/contactconfirm", {replace:true});

	}

	// Use values provided by hook in JSX
	if (!formSubmitted) {
		return (
			<Main>
				<h1>Contact</h1>
				<h2>Send Us a Quick Message</h2>
				<p>
					You can remove any link to our website from this website template, you're free to use this website template without linking back to us.If you're having problems editing this website template, then don't hesitate to ask for help on the Forums.
				</p>
				<form action="index.html" method="post" className="message" onSubmit={submitHandler}>
					<label>First Name</label>
					<input type="text" onBlur={firstNameBlurHandler} onChange={firstNameHandler} value={firstNameValue} className={firstNameHasError ? "error" : ''} />
					<label>Last Name</label>
					<input type="text" onBlur={lastNameBlurHandler} onChange={lastNameHandler} value={lastNameValue} className={lastNameHasError ? "error" : ''} />
					<label>Email Address</label>
					<input type="text" onBlur={emailBlurHandler} onChange={emailHandler} value={emailValue} className={emailHasError ? "error" : ''} />
					<label>Message</label>
					<textarea onBlur={messageBlurHandler} onChange={messageHandler} value={messageValue} className={messageHasError ? "error" : ''}></textarea>
					<input disabled={!formIsValid} type="submit" value="Send Message" />
				</form>


			</Main>
		);
	} else {
		return (<>
			<p>Thank you!  We will contact you soon at the email address you provided.</p>
			<button onClick={() => {
				setFormSubmitted(false);
			}}>Submit another request</button>
		</>)

	}

}

export default ContactForm;