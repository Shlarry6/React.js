import React from 'react';

const ContactContext = React.createContext({
    contactRequests: [],
    postContactRequest: () => {},
    getContactRequests: () => {}
});

export default ContactContext;