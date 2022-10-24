import React from 'react';

const ContactContext = React.createContext({
    contactRequests: [],
    postContactRequest: () => {},
    deleteRequest: () => {}
});

export default ContactContext;