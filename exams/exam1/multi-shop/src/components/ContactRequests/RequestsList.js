import { useContext } from "react"
import ContactContext from "../../Store/contact-context"

const RequestsList = () => {
    const ctxContact = useContext(ContactContext);
    return (
        <>
            {ctxContact.contactRequests.map((request) => (
                <div style={{border: 'solid 2px', margin: '10px', borderRadius: '10px', paddingLeft: '100px'}} key={request.id}>
                        <h2>{request.name}</h2> 
                        <h6>{request.email}</h6>
                        <p>{request.subject}</p> 
                        <p>{request.message} </p> 
                        <p>{request.timestamp}</p>
                    <button style={{padding: '5px', margin: '10px', width: '300px', height: '40px', borderRadius: '7px', backgroundColor: 'gold', fontWeight: 'bold'}} onClick={() => {ctxContact.deleteRequest(request.id)}}>Delete Request</button>
                </div>
            ))}
        </>
    );
};

export default RequestsList;