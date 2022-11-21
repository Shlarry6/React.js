import { useContext, useState } from 'react';
import ContactContext from '../../store/contact-context';
import './ContactForm.css';

const ContactForm = () => {
	const ctxContact = useContext(ContactContext);
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [fNameTouched, setFNameTouched] = useState(false);
	const [lNameTouched, setLNameTouched] = useState(false);
	const [emailTouched, setEmailTouched] = useState(false);
	const [messageTouched, setMessageTouched] = useState(false);

	let fNameValid = firstName.trim() !== '';
	let fNamsIsInvalid = !fNameValid && fNameTouched;
	let lNameValid = lastName.trim() !== '';
	let lNameIsInvalid = !lNameValid && lNameTouched;
	let emailValid = email.includes('@');
	let emailIsInvalid = !emailValid && emailTouched;
	let messageValid = message.trim() !== '';
	let messageIsInvalid = !messageValid && messageTouched;

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
	
	const fNameTouchedHandler = () => {
		setFNameTouched(true);
	}
	const lNameTouchedHandler = () => {
		setLNameTouched(true);
	}
	const emailTouchedHandler = () => {
		setEmailTouched(true);
	}
	const messageTouchedHandler = () => {
		setMessageTouched(true);
	}

	const submitHandler = (event) => {
		event.preventDefault();

		ctxContact.addContactRequest({ firstName: firstName, lastName: lastName, email: email, message: message });

		// setContactRequests((prevContactRequests) => {
		// 	return [
		// 		...prevContactRequests,
		// 		{ firstName: firstName, lastName: lastName, email: email, message: message }
		// 	];	
		// });
		// clear form values
		setFirstName('');
		setFNameTouched(false);
		setLastName('');
		setLNameTouched(false);
		setEmail('');
		setEmailTouched(false);
		setMessage('');
		setMessageTouched(false);
	}

	let fnameClass = fNamsIsInvalid ? 'invalid' : 'valid';
	let lnameClass = lNameIsInvalid ? 'invalid' : 'valid';
	let emailClass = emailIsInvalid ? 'invalid' : 'valid';
	let messageClass = messageIsInvalid ? 'invalid' : 'valid';

	return (
		<>
			<h1>Contact</h1>
			<h2>Send Us a Quick Message</h2>
			<p>
				You can remove any link to our website from this website template, you're free to use this website template without linking back to us.If you're having problems editing this website template, then don't hesitate to ask for help on the Forums.
			</p>
			<form action="index.html" method="post" className="message" onSubmit={submitHandler}>
				<label>First Name</label>
				{fNamsIsInvalid && <span style={{color: 'red'}}>First name does not meet requirements.</span>}
				<input className={fnameClass} type="text" value={firstName} onChange={firstNameHandler} onBlur={fNameTouchedHandler} />
				<label>Last Name</label>
				{lNameIsInvalid && <span style={{color: 'red'}}>Last name does not meet requirements.</span>}
				<input className={lnameClass} type="text" value={lastName} onChange={lastNameHandler} onBlur={lNameTouchedHandler}/>
				<label>Email Address</label>
				{emailIsInvalid && <span style={{color: 'red'}}>Email does not meet requirements.</span>}
				<input className={emailClass} type="text" value={email} onChange={emailHandler} onBlur={emailTouchedHandler} />
				<label>Message</label>
				{messageIsInvalid && <span style={{color: 'red'}}>Message does not meet requirements.</span>}
				<textarea className={messageClass} value={message} onChange={messageHandler} onBlur={messageTouchedHandler}></textarea>
				<input type="submit" value="Send Message"/>
			</form>
		</>
	);
}

export default ContactForm;