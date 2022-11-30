import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import ContactContext from '../../store/contact-context';

const ContactRequestList = (props) => {

    const ctxContact = useContext(ContactContext);

    // const [contacts, setContacts] = useState();
    const [error, setError] = useState("");
    
    
    const contacts = ctxContact.contactRequests;

    // const getContacts = async () => {
    //     try {
    //         const result = await axios.get(`http://localhost:5000/contactRequests`);
    //         setContacts(result.data);
    //         console.log("Result is...", result);
    //         setError("");
    //     } catch (error) {
    //         console.log(error);
    //         setError(error.message);
    //     }

    // }

    // useEffect(() => {
    //     getContacts();  
    //     console.log("Context Value is: ", ctxContact);
    // }, []);

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