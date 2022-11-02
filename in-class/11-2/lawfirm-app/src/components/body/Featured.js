import React, { useState, useEffect, useCallback } from 'react';
import './Featured.css';
import FeaturedItem from './featured-item/FeaturedItem';
import useHttp from '../../hooks/use-http';

const Featured = () => {
    const [featuredItems, setFeaturedItems] = useState([]);
    const {isLoading, error, sendRequest: getFeaturedItems} = useHttp();

    useEffect(() => {
        getFeaturedItems({url: 'http://localhost:5000/featuredItems?_limit=4'},
        setFeaturedItems
        );
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