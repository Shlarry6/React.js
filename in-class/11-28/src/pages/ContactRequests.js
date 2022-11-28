import { ContactContextProvider } from "../store/contact-context";
import ContactRequestList from "../components/Contact/ContactRequestList";

const ContactRequests = () => {
    return (
        <ContactContextProvider>
            <ContactRequestList />
        </ContactContextProvider>
    );
};

export default ContactRequests;