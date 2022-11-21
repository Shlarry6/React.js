import Main from '../UI/Main/Main';
import useHttp from '../../hooks/use-http';
import { useEffect, useState } from 'react';

const Lawyers = () => {
    const { isLoading, error, sendRequest: getLawyers } = useHttp();
    const [lawyers, setLawyers] = useState([]);

    useEffect(() => {
        getLawyers({ url: 'http://localhost:5000/lawyers' }, setLawyers);
    }, [getLawyers]);

    console.log(lawyers);

    return (
        <Main>
            <h1>Our Lawyers</h1>
            {error && <p>Oops, something went wrong. {error}</p>}
            {isLoading && <p>Loading...</p>}
            {!isLoading && <>
                {Object.keys(lawyers).map((section, index) => {
                    return (
                        <div key={index} className={`section ${index === Object.keys(lawyers).length - 1 ? 'last-child' : ''}`}>
                            <h2>{section}</h2>
                            <ul>
                                {lawyers[section].map((person) => {
                                    return (
                                        <li>
                                            <div className="frame4">
                                                <div className="box">
                                                    <img src={require(`../../Assets/images/${person.image}`)} alt="Img" height="94" width="90" />
                                                </div>
                                            </div>
                                            <p>
                                                <b>{person.name}</b> {person.bio}
                                            </p>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    );
                })}
            </>}
        </Main>
    )
};

export default Lawyers;