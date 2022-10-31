import axios from 'axios';
import { useEffect, useState, useCallback } from 'react';

const Practices = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [practices, setPractices] = useState([]);

    const getPractices = useCallback(async () => {
        setError(null);
        setIsLoading(true);
        try {
            let response = await axios.get('http://localhost:5000/practices');
            setPractices(response.data);
        } catch (error) {
            setError(error.message);
        }
        setIsLoading(false);
    }, []);

    useEffect(() => {
        getPractices();
    }, [getPractices]);

    return (
        <div className="main">
            <h1>Practices</h1>
            {isLoading && <p>Loading...</p>}
            {!isLoading && error && <p>{error}</p>}
            {!isLoading && !error && <ul className="practices">
                {practices.map(practice => (
                    <li className="frame5" key={practice.id}>
                        <a href="post.html" className="box"><img src={require(`../../Assets/${practice.img}`)} height="198" width="265"/><span>{practice.title}</span></a>
                        <p>{practice.description}</p>
                    </li>
                ))}
            </ul>}
        </div>
    );
};

export default Practices;