import './ContactForm.css';
import React, { useState, useRef } from 'react';
import axios from 'axios';

const ContactForm = () => {
	const fNameRef = useRef();
	const lNameRef = useRef();
	const emailRef = useRef();
	const messageRef = useRef();

	const [requests, setRequests] = useState([]);
	const [emailIsValid, setEmailIsValid] = useState(true);

	const postContactRequests = async (eFirstName, eLastName, eEmail, eMessage, time) => {
		try {
			const result = await axios.post('http://localhost:5000/contactRequests', {
				firstName: eFirstName,
				lastName: eLastName,
				email: eEmail,
				message: eMessage,
				timestamp: time
			});
		} catch (error) {
			console.log(error);
		}
	}

	const onSubmit = (event) => {
		event.preventDefault();
		const firstName = fNameRef.current.value;
		const lastName = lNameRef.current.value;
		const email = emailRef.current.value;
		const message = messageRef.current.value;
		const time = new Date();

		if (email.includes("@")) {
			postContactRequests(firstName, lastName, email, message, time.toString());

			setRequests((prevRequests) => {
				return [
					...prevRequests,
					{firstName: firstName, lastName: lastName, email: email, message: message, timeStamp: time.toString()}
				];
			});

			fNameRef.current.value = '';
			lNameRef.current.value = '';
			emailRef.current.value = '';
			messageRef.current.value = '';
			setEmailIsValid(true);
		} else {
			setEmailIsValid(false);
		}
	};

	return (
		<>
			<h1>Contact</h1>
			<h2>Send Us a Quick Message</h2>
			<p>
				You can remove any link to our website from this website template, you're free to use this website template without linking back to us.If you're having problems editing this website template, then don't hesitate to ask for help on the Forums.
			</p>
			<form onSubmit={onSubmit} className="message">
				<label>First Name</label>
				<input type="text" ref={fNameRef} />
				<label>Last Name</label>
				<input type="text" ref={lNameRef} />
				<label>Email Address</label>
				<input type="text" ref={emailRef} />
				<label>Message</label>
				<textarea ref={messageRef}></textarea>
				<input type="submit" value="Send Message" />
				{!emailIsValid && <p style={{ color: 'red' }}>Please enter a valid email address</p>}
			</form>
		</>
	);
};

export default ContactForm;