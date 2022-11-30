import { useNavigate } from "react-router-dom";

const ContactConfirmPage = () => {

    const navigate = useNavigate();
    return (<>
        <p>Thank you!  We will contact you soon at the email address you provided.</p>
        <button onClick={() => {
            navigate(-1);
        }}>Submit another request</button>
    </>)
}

export default ContactConfirmPage;