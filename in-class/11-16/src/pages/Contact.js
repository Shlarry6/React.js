import { ContactContextProvider } from '../store/contact-context';
import Sidebar from '../components/UI/Sidebar/Sidebar';
import Main from '../components/UI/Main/Main';
import ContactForm from '../components/Contact/ContactForm';
import ContactSidebar from '../components/Contact/ContactSidebar';


const Contact = () => {
    return (
        <ContactContextProvider>
            <Sidebar>
                <ContactSidebar />
            </Sidebar>
            <Main>
                <ContactForm />
            </Main>
        </ContactContextProvider>
    );
};

export default Contact;