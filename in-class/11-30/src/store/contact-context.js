import react, {useState, useEffect} from 'react';
import axios from 'axios';

// Create a new Context for managing and accessing contact requests
const ContactContext = react.createContext({
    contactRequests: [],
    addContactRequest: () => {},
    deleteContactRequest: () => {}
});

export const ContactContextProvider = (props) => {

    //State variable for storing list of contact requests
    const [contactRequests, setContactRequests] = useState([]);

    // State variable for tracking updates to the contact request list
    const [dataChangeToggle, setDataChangeToggle] = useState(false);

    useEffect(() => {
        getContactRequests();
    }, [dataChangeToggle])

    // Function for retrieving the list of contact requests
    const getContactRequests = async () => {
        try {
            const result = await axios.get("http://localhost:5000/contactRequests");
            console.log("Result of getContactRequests: ", result);
            // Update the state variable with the new data
            setContactRequests(result.data);
        } catch (error) {
            console.log(error);
        }
       
    }

    // Function for adding a new contact request to the list
    const addContactRequest = async (contactRequest) => {
        try {
            const result = await axios.post("http://localhost:5000/contactRequests", contactRequest);
            console.log("Result of addContactRequest: ", result);
        } catch (error) {
            console.log(error);
        }
    }

    // Function for deleting a contact request
    const deleteContactRequest = async (contactRequestId) => {
        try {
            const result = await axios.delete(`http://localhost:5000/contactRequests/${contactRequestId}`);
            console.log("Result of addContactRequest: ", result);

            // Update the toggle state variable
            setDataChangeToggle(!dataChangeToggle);
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <ContactContext.Provider value={{
            contactRequests: contactRequests,
            addContactRequest: addContactRequest,
            deleteContactRequest: deleteContactRequest
        }}>
            {props.children}
        </ContactContext.Provider>
    )
}

export default ContactContext;