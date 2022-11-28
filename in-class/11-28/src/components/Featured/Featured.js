import React, { useEffect, useState, useCallback } from 'react';
import './Featured.css';
import FeaturedItem from './FeaturedItem';
import useHttp from '../../hooks/use-http';



const Featured = (props) => {
    const { isLoading, error, sendRequest: getFeaturedItems } = useHttp();
    const [featuredItems, setFeaturedItems] = useState([]);
   
    const delay = (ms) => {
        return new Promise(resolve => {setTimeout(resolve, ms)});
    }

    useEffect(() => {
        getFeaturedItems({url: 'http://localhost:5000/featuredItems?_limit=4'}, setFeaturedItems);
    }, [getFeaturedItems])

    return (
        <div className="featured">
            <h2>Why Choose Us?</h2>
            {error && <p>Oops, something went wrong. {error}</p>}
            {isLoading && <p>Loading...</p>}
            {!isLoading && <ul className="clearfix">
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