import React, { useState, useEffect, useCallback } from 'react';
import './Featured.css';
import FeaturedItem from './featured-item/FeaturedItem';
import axios from 'axios';

const Featured = () => {
    console.log("Featured");
    const [featuredItems, setFeaturedItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    // const getFeaturedItems = () => {
    //     axios.get("http://localhost:5000/featuredItems?_limit=3")
    //         .then((response) => {
    //             setFeaturedItems(response.data);
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // }

    const delay = (ms) => {
        return new Promise(resolve => {setTimeout(resolve, ms)});
    };

    const getFeaturedItems = useCallback(async () => {
        setError(null);
        setIsLoading(true);
        await delay(2000);
        try {
            const response = await axios.get("http://localhost:5000/featuredItems?_limit=4");
            setFeaturedItems(response.data);
        } catch (error) {
            setError(error.message);
        };
        setIsLoading(false);
    }, []);

    useEffect(() => {
        getFeaturedItems();
    }, [getFeaturedItems]);

    return (
        <div className="featured">
            <h2>Why Choose Us?</h2>
            {isLoading && <p>Loading...</p>}
            {!isLoading && error && <p>An error has occurred... {error}</p>}
            {!isLoading && !error && <ul className="clearfix">
                {/* {featuredItems.length === 0 &&<button onClick={getFeaturedItems}>See Featured Items</button>} */}

                {featuredItems.length > 0 && featuredItems.map((item) => {
                    return <FeaturedItem key={item.id} value={item} />
                })} 
            </ul>}
        </div>
    );
};

export default React.memo(Featured);