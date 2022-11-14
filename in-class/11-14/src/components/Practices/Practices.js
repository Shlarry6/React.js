import React, { useEffect, useState, useCallback } from 'react';
import Main from "../UI/Main/Main";
import axios from 'axios';
import './Practices.css';
import useHttp from '../../hooks/use-http';

const Practices = () => {

    const { isLoading, error, sendRequest: getPractices } = useHttp();
    
    const [practices, setPractices] = useState([]);
    // const [isLoading, setIsLoading] = useState(false);
    // const [error, setError] = useState(null);

    // const delay = (ms) => {
    //     return new Promise(resolve => {setTimeout(resolve, ms)});
    // }

    // const getPractices = useCallback(async () => {
    //     // Reset state variables
    //     setError(false);
    //     setIsLoading(false);

    //     try {
    //         setIsLoading(true);
    //         await delay(2000);
    //         const result = await axios.get('http://localhost:5000/practices');
    //         console.log(result);
    //         setPractices(result.data);
           
    //     } catch (error) {
    //         setError(error.message);
    //         console.log(error);
    //         // other error handling here
    //     }
    //     setIsLoading(false);
    // }, []);



    useEffect(() => {
        getPractices({url: 'http://localhost:5000/practices'}, setPractices);
    }, [getPractices])
    return (
        <Main>
             {error && <p>Oops, something went wrong. {error}</p>}
            {isLoading && <p>Loading...</p>}
            {!isLoading && !error && <>
            <h1>Practices</h1>
				<p>
					This website template has been designed by <a href="http://www.freewebsitetemplates.com/">Free Website Templates</a> for you, for free. You can replace all this text with your own text. You can remove any link to our website from this website template, you're free to use this website template without linking back to us. If you're having problems editing this website template, then don't hesitate to ask for help on the <a href="http://www.freewebsitetemplates.com/forums/">Forums</a>.
				</p>
				<ul class="practices">
                    {practices.map(practice => {
                        return (
                            <li className="frame5">
						<a href={`practices/${practice.id}`} className="box"><img src={require(`../../Assets/images/${practice.image}`)} height="198" width="265" /><span>{practice.title}</span></a>
					</li>
                        )
                    })}
					
				</ul>
                </>}
        </Main>
    );
}

export default Practices;