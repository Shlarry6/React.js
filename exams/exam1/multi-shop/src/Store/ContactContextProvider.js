import ContactContext from "./contact-context";
import axios from 'axios';

const ContactContextProvider = (props) => {
    let requests = [];

    const postContactRequest = async (eName, eEmail, eSubject, eMessage, timeStamp) => {
        try {
            let response = await axios.post('http://localhost:5000/contactRequests', {
                name: eName,
                email: eEmail,
                subject: eSubject,
                message: eMessage,
                timestamp: timeStamp
            });
        } catch (error) {
            console.log(error);
        };
    };

    const getContactRequests = async () => {
        try {
            let response = await axios.get("http://localhost:5000/contactRequests");
            return response.data;
        } catch (error) {
            console.log(error);
        };
    };

    return (
        <ContactContext.Provider value={{
            contactRequests: requests,
            postContactRequest: postContactRequest,
            getContactRequests: getContactRequests
        }}>
            {props.children}
        </ContactContext.Provider>
    );
};

export default ContactContextProvider;