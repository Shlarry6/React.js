import React from 'react';

const ContactContext = React.createContext({
    contactRequests: [],
    postContactRequest: () => {}
});

export default ContactContext;