import { useState, useContext } from 'react';
import './ContactForm.css';
import ContactContext from '../../store/contact-context';

const ContactForm = () => {

	const ctxContact = useContext(ContactContext);

	// State variables for user inputs
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	// State variables for form input touched state
	const [firstNameTouched, setFirstNameTouched] = useState(false);
	const [lastNameTouched, setLastNameTouched] = useState(false);
	const [emailTouched, setEmailTouched] = useState(false);
	const [messageTouched, setMessageTouched] = useState(false);

	// Derived values for validating user inputs
	const firstNameValid = firstName.trim() !== "";
	const lastNameValid = lastName.trim() !== "";
	const emailValid = email.trim() !== "" && email.includes("@");
	const messageValid = message.trim() !== "";

	// Derived values for validating form input fields
	const firstNameInputInvalid = firstNameTouched && !firstNameValid;
	const lastNameInputInvalid = lastNameTouched && !lastNameValid;
	const emailInputInvalid = emailTouched && !emailValid;
	const messageInputInvalid = messageTouched && !messageValid;

	// Derived value for form validity
	const formValid = firstNameValid && lastNameValid && emailValid && messageValid;
	
	// Handler functions for saving user inputs
	const firstNameHandler = (event) => {
		setFirstName(event.target.value);
	}

	const lastNameHandler = (event) => {
		setLastName(event.target.value);
	}

	const emailHandler = (event) => {
		setEmail(event.target.value);
	}

	const messageHandler = (event) => {
		setMessage(event.target.value);
	}

	// Handler functions for managing touched state
	const firstNameBlurHandler = () => {
		setFirstNameTouched(true);
	}

	const lastNameBlurHandler = () => {
		setLastNameTouched(true);
	}

	const emailBlurHandler = () => {
		setEmailTouched(true);
	}

	const messageBlurHandler = () => {
		setMessageTouched(true);
	}

	// Form submit handler
	const submitHandler = (event) => {
		event.preventDefault();

		// If form is not valid, return without updating data
		if (!formValid)
			return;
		
			// Call context to add the new data to the database
		ctxContact.addContactRequest({ firstName: firstName, lastName: lastName, email: email, message: message });

		// setContactRequests((prevContactRequests) => {
		// 	return [
		// 		...prevContactRequests,
		// 		{ firstName: firstName, lastName: lastName, email: email, message: message }
		// 	];	
		// });

		// clear form values
		setFirstName('');
		setLastName('');
		setEmail('');
		setMessage('');

		//reset touched state
		setFirstNameTouched(false);
		setLastNameTouched(false);
		setEmailTouched(false);
		setMessageTouched(false);
	}


	return (
		<>
			<h1>Contact</h1>
			<h2>Send Us a Quick Message</h2>
			<p>
				You can remove any link to our website from this website template, you're free to use this website template without linking back to us.If you're having problems editing this website template, then don't hesitate to ask for help on the Forums.
			</p>
			<form action="index.html" method="post" className="message" onSubmit={submitHandler}>
				<label>First Name</label>
				<input type="text" value={firstName} onChange={firstNameHandler} onBlur={firstNameBlurHandler} className={firstNameInputInvalid ? "error" : ""}/>
				{firstNameInputInvalid && <p>Please enter a first name.</p>}
				<label>Last Name</label>
				<input type="text" value={lastName} onChange={lastNameHandler} onBlur={lastNameBlurHandler} className={lastNameInputInvalid ? "error" : ""} />
				<label>Email Address</label>
				<input type="text" value={email} onChange={emailHandler} onBlur={emailBlurHandler} className={emailInputInvalid ? "error" : ""} />
				<label>Message</label>
				<textarea value={message} onChange={messageHandler} onBlur={messageBlurHandler} className={messageInputInvalid ? "error" : ""}></textarea>
				<input disabled={!formValid} type="submit" value="Send Message"/>
			</form>
		</>
	);
}

export default ContactForm;