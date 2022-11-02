import './ContactForm.css';
import React, { useState } from 'react';

const ContactForm = () => {
	const [fName, setFName] = useState("");
	const [lName, setLName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [requests, setRequests] = useState([]);

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

	const onSubmit = (event) => {
		event.preventDefault();
		const newReq = {
			firstName: fName, lastName: lName, email: email, message: message, timestamp: new Date()
		};
		setRequests((prevRequest) => {
			return [...prevRequest, newReq]
		});
		console.log(fName, lName, email, message, new Date());
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
			<form onSubmit={onSubmit} className="message">
				<label>First Name</label>
				<input type="text" value={fName} onChange={fNameChangeHandler} />
				<label>Last Name</label>
				<input type="text" value={lName} onChange={lNameChangeHandler} />
				<label>Email Address</label>
				<input type="text" value={email} onChange={emailChangeHandler} />
				<label>Message</label>
				<textarea value={message} onChange={messageChangeHandler}></textarea>
				<input type="submit" value="Send Message" />
			</form>
			{requests &&
				<ul>
					{requests.map((req, index) => (
						<li key={index}> 
							<p>{req.firstName}</p>
							<p>{req.lastName}</p>
							<p>{req.email}</p>
							<p>{req.message}</p>
							<p>{req.timestamp.toString()}</p>
						</li>
					))}
				</ul>
			}
		</>
	);
};

export default ContactForm;