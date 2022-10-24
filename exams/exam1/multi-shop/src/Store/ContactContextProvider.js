import ContactContext from "./contact-context";
import axios from 'axios';
import { useEffect, useState } from "react";

const ContactContextProvider = (props) => {
    const [requests, setRequests] = useState([]);

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
            setRequests(response.data);
        } catch (error) {
            console.log(error);
        };
    };

    const deleteRequest = async (id) => {
        try {
            let response = axios.delete(`http://localhost:5000/contactRequests/${id}`);
            let reqs = requests.filter(req => req.id !== parseInt(id));
            setRequests(reqs);
        } catch (error) {
            console.log(error);
        };
    };

    useEffect(() => {
        getContactRequests();
    }, [])

    return (
        <ContactContext.Provider value={{
            contactRequests: requests,
            postContactRequest: postContactRequest,
            deleteRequest: deleteRequest
        }}>
            {props.children}
        </ContactContext.Provider>
    );
};

export default ContactContextProvider;