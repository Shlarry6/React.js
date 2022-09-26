import './ContactForm.css';
import React, { useState } from 'react';

const ContactForm = () => {
	const [fName, setFName] = useState("");
	const [lName, setLName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [request, setRequest] = useState({});

	const fNameChangeHandler = (event) => {
		setFName(event.target.value);
	};
	const lNameChangeHandler = (event) => {
		setLName(event.target.value);
	};
	const emailChangeHandler = (event) => {
		setEmail(event.target.value);
	};
	const messageChangeHandler = (event) => {
		setMessage(event.target.value);
	};

	const onSubmit = () => {
		setRequest(
			{
				firstName: fName,
				lastName: lName,
				email: email,
				message: message,
				timestamp: new Date(),
			}
		)
		setFName("");
		setLName("");
		setEmail("");
		setMessage("");
	};

	return (
		<>
			<h1>Contact</h1>
			<h2>Send Us a Quick Message</h2>
			<p>
				You can remove any link to our website from this website template, you're free to use this website template without linking back to us.If you're having problems editing this website template, then don't hesitate to ask for help on the Forums.
			</p>
			<form action="index.html" method="post" className="message">
				<label>First Name</label>
				<input type="text" onChange={fNameChangeHandler} />
				<label>Last Name</label>
				<input type="text" onChange={lNameChangeHandler} />
				<label>Email Address</label>
				<input type="text" onChange={emailChangeHandler} />
				<label>Message</label>
				<textarea onChange={messageChangeHandler}></textarea>
				<input type="submit" onSubmit={onSubmit} value="Send Message" />
			</form>
		</>
	);
};

export default ContactForm;