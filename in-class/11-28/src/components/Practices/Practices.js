import React, { useEffect, useState, useCallback } from 'react';
import Main from "../UI/Main/Main";
import './Practices.css';
import useHttp from '../../hooks/use-http';
import { Link } from 'react-router-dom';

const Practices = () => {

    const { isLoading, error, sendRequest: getPractices } = useHttp();
    
    const [practices, setPractices] = useState([]);

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
                    {practices.map((practice, index) => {
                        return (
                            <li key={index} className="frame5">
						<Link to={`${practice.id}`} className="box"><img src={require(`../../Assets/images/${practice.image}`)} height="198" width="265" /><span>{practice.title}</span></Link>
					</li>
                        )
                    })}
				</ul>
                </>}
        </Main>
    );
}

export default Practices;