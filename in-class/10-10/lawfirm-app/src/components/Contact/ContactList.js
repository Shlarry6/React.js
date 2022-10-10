import axios from 'axios';
import React, {useState, useEffect, useContext} from 'react';
import RequestContext from '../../Store/request-context';

const ContactList = () => {
    const [requests, setRequests] = useState([]);
    const [errorMessage, setErrorMessage] = useState();
    const requestCtx = useContext(RequestContext);

    const getRequests = async () => {
        try {
            const result = await axios.get(`http://localhost:5000/contactRequests`);
            setRequests(result.data);
            setErrorMessage(null);
        } catch(error) {
            setErrorMessage("There was an error: " + error.message);
            console.log(error);
        }
    };

    useEffect(() => {
        getRequests();
        console.log(requestCtx.value);
    }, []);

    if(errorMessage) {
        return <div>{errorMessage}</div>
    }
    if(requests) {
        return (
            <div>
                <h1>{requestCtx.value}</h1>
            <ul>
                {requests.map((request, index) => (
                    <li key={index} style={{ listStyle: "none" }}>Request: {request.firstName} {request.lastName}, {request.email}, {request.timestamp.slice(0,10)}</li>
                    
                ))}
            </ul>
            </div>
        );
    } else {
        return <div>There are no contact requests</div>
    }
};

export default ContactList;