import { useState, useRef, useContext } from 'react';
import './ContactForm.css';
import ContactContext from '../../store/contact-context';
import { useNavigate } from 'react-router-dom';

const ContactForm = () => {

	const navigate = useNavigate();

	const ctxContact = useContext(ContactContext);

	const firstNameRef = useRef();
	const lastNameRef = useRef();
	const emailRef = useRef();
	const messageRef = useRef();

	const [emailIsValid, setEmailIsValid] = useState(true);

	const afterSubmitHandler = () => {
		navigate("/contactconfirm");
	};
	
	const submitHandler = (event) => {
		event.preventDefault();

		const firstName = firstNameRef.current.value;
		const lastName = lastNameRef.current.value;
		const email = emailRef.current.value;
		const message = messageRef.current.value;

		if (email.includes('@')) {
			setEmailIsValid(true);
			
			ctxContact.addContactRequest({ firstName: firstName, lastName: lastName, email: email, message: message });
			
			firstNameRef.current.value = '';
			lastNameRef.current.value = '';
			emailRef.current.value = '';
			messageRef.current.value = '';

			afterSubmitHandler();
		} else {
			setEmailIsValid(false);
		}
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
				<input type="text" ref={firstNameRef} />
				<label>Last Name</label>
				<input type="text" ref={lastNameRef} />
				<label>Email Address</label>
				<input type="text" ref={emailRef} />
				<label>Message</label>
				<textarea ref={messageRef}></textarea>
				<input type="submit" value="Send Message"/>
				{!emailIsValid && <p>Please enter a valid email address</p>}
			</form>
		</>
	);
}

export default ContactForm;