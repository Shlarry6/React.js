import React, { useEffect, useState, useCallback } from 'react';
import './Featured.css';
import FeaturedItem from './FeaturedItem';
import axios from 'axios';
import useHttp from '../../hooks/use-http';



const Featured = (props) => {

    const { isLoading, error, sendRequest: getFeaturedItems } = useHttp();

    const [featuredItems, setFeaturedItems] = useState([]);
    // const [isLoading, setIsLoading] = useState(false);
    // const [error, setError] = useState(null);

    // Function using .then and .catch
    // const getFeaturedItems = () => {
    //     axios.get('http://localhost:5000/featured    Items?_limit=3')
    //     .then((result) => {
    //         console.log(result);
    //         setFeaturedItems(result.data);
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     })
    // }

    // Function using async/await

    const delay = (ms) => {
        return new Promise(resolve => {setTimeout(resolve, ms)});
    }

    // const getFeaturedItems = useCallback(async () => {
    //     // Reset state variables
    //     setError(false);
    //     setIsLoading(false);

    //     try {
    //         setIsLoading(true);
    //         await delay(2000);
    //         const result = await axios.get('http://localhost:5000/featuredItems?_limit=4');
    //         console.log(result);
    //         setFeaturedItems(result.data);
           
    //     } catch (error) {
    //         setError(error.message);
    //         console.log(error);
    //         // other error handling here
    //     }
    //     setIsLoading(false);
    // }, []);



    useEffect(() => {
        getFeaturedItems({url: 'http://localhost:5000/featuredItems?_limit=4'}, setFeaturedItems);
    }, [getFeaturedItems])

    // const clickHandler = () => {
    //     getFeaturedItems();
    // }


    return (
        <div className="featured">
            <h2>Why Choose Us?</h2>
            {error && <p>Oops, something went wrong. {error}</p>}
            {isLoading && <p>Loading...</p>}
            {!isLoading && <ul className="clearfix">
                {/* {featuredItems.length === 0 && <button onClick={clickHandler}>See featured items</button>} */}

                {featuredItems.length > 0 && featuredItems.map((item) => {
                    return (
                        <FeaturedItem
                            key={item.id}
                            title={item.title}
                            text={item.text}
                            link={item.link}
                            image={item.image}
                        />
                    )
                })}


            </ul>}
        </div>
    );
}

export default React.memo(Featured);