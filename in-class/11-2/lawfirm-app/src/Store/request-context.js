import React, { useState, useEffect } from 'react'; 
import axios from 'axios';

const RequestContext = React.createContext({
    contactRequests: [],
    postContactRequest: () => {},
    error: '',
    deleteRequest: () => {}
});

export const RequestContextProvider = (props) => {
    // state variable for storing list of contact requests
    const [requests, setRequests] = useState([]);
    const [error, setError] = useState();

    // function for retrieving the list of contact requests
    const getContactRequests = async () => {
        try {
            let response = await axios.get("http://localhost:5000/contactRequests");
            // update the state variable with the new data.
            setRequests(response.data);
            return response.data;
        } catch (error) {
            setError(error.message);
            console.log(error);
        }
    };

    const postContactRequest = async (eFirstName, eLastName, eEmail, eMessage, time) => {
        try {
            let response = await axios.post('http://localhost:5000/contactRequests', {
                firstName: eFirstName,
                lastName: eLastName,
                email: eEmail,
                message: eMessage,
                timestamp: time
            });
            console.log(response);
        } catch (error) {
            setError(error.message);
            console.log(error);
        }
    };

    const deleteContactRequest = async (id) => {
        try {
            let response = axios.delete(`http://localhost:5000/contactRequests/${id}`);
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getContactRequests();
        
        const timer = setTimeout(() => {
            console.log("logging:");
            setError(false);
        }, 300);

        return () => {
        clearTimeout(timer);
        }
    }, []);

    return (
        <RequestContext.Provider value={{
            contactRequests: requests,
            postContactRequest: postContactRequest,
            error: error,
            deleteRequest: deleteContactRequest
        }}>
            {props.children}
        </RequestContext.Provider>
    );
};

export default RequestContext;