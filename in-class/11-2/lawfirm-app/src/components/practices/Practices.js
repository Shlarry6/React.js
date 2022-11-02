import { useEffect, useState } from 'react';
import useHttp from '../../hooks/use-http';

const Practices = () => {
    const {isLoading, error, sendRequest: getPractices} = useHttp();
    const [practices, setPractices] = useState([]);

    useEffect(() => {
        getPractices({url: 'http://localhost:5000/practices'}, setPractices);
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