import { useState, useContext } from 'react';
import ContactContext from '../../store/contact-context';

const ContactRequestList = (props) => {
    const ctxContact = useContext(ContactContext);
    const [error, setError] = useState("");
    const contacts = ctxContact.contactRequests;

    if (contacts) {
        return (
            <div>
                <h1>Contact Requests</h1>
                {
                    contacts.map((cr) => {
                        return (
                            <div key={cr.id}>
                                <h2>{cr.firstName} {cr.lastName} - {cr.email}</h2>
                                <p>{cr.message}</p>
                                <br />
                                <button onClick={() => {
                                    ctxContact.deleteContactRequest(cr.id);
                                }}>Delete</button>
                            </div>
                        )
                    })
                }
            </div>
        );
    } else if (error) {
        return <p>Oops! There was an error: {error}</p>
    }
};

export default ContactRequestList;