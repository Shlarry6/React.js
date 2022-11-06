import React, { useState, useContext } from 'react';
import RequestContext from '../../Store/request-context';

const ContactList = () => {
    const requestCtx = useContext(RequestContext);
    const contacts = requestCtx.contactRequests;
    const error = requestCtx.error;

    if (error) {
        return <div>{error}</div>
    }
    if (contacts) {
        return (
            <div>
                <ul>
                    {contacts.map((request, index) => (
                        <li
                            key={index}
                            style={{ listStyle: "none" }}
                        >
                            Request: {request.firstName} {request.lastName}, {request.email}, {request.timestamp.slice(0, 10)}
                            <button onClick={() => {requestCtx.deleteRequest(request.id)}}>Delete Me!</button>
                        </li>
                    ))}
                </ul>
            </div>
        );
    } else {
        return <div>There are no contact requests</div>
    }
};

export default ContactList;