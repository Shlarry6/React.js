import { useContext } from "react"
import ContactContext from "../../Store/contact-context"

const RequestsList = () => {
    const ctxContact = useContext(ContactContext);

    

    return (
        <>
            <button onClick={ctxContact.getContactRequests}>Click Me!</button>
            {}
        </>
    );
};

export default RequestsList;