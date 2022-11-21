import { Navigate, useNavigate } from 'react-router-dom';

const ContactConfirmPage = () => {
    const navigate = useNavigate();

    const clickHandler = () => {
        navigate("/contact");
    };

    return (
        <>
            <p>Thank you! We will contact you soon at the email address you provided.</p>
            <button onClick={clickHandler}>Submit another request</button>
        </>
    );
};

export default ContactConfirmPage;