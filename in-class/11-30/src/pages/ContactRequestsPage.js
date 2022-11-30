import { ContactContextProvider } from "../store/contact-context";
import ContactRequestList from "../components/Contact/ContactRequestList";

const ContactRequestsPage = () => {
    return (

        <ContactContextProvider>
            <ContactRequestList />
        </ContactContextProvider>
    );
}

export default ContactRequestsPage;