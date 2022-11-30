import { ContactContextProvider } from "../store/contact-context";
import ContactSidebar from "../components/Contact/ContactSidebar";
import ContactForm from "../components/Contact/ContactForm_state";

const ContactPage = () => {
    return (
        <ContactContextProvider>
            <ContactSidebar />
            <ContactForm />
        </ContactContextProvider>
    );
}

export default ContactPage;