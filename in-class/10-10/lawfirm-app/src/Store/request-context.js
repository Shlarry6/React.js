import React, { useState, useEffect } from 'react'; 

const RequestContext = React.createContext({
    requests: {},
    value: "Hello World!"
});

export const RequestContextProvider = (props) => {
    const [requests, setRequests] = useState([]);

    useEffect(() => {}, []);
    return <>{props.children}</>
};

export default RequestContext;