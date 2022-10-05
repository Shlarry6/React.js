import React, { useState, useEffect } from 'react';
import './Featured.css';
import FeaturedItem from './featured-item/FeaturedItem';
import axios from 'axios';

const Featured = () => {
    const [featuredItems, setFeaturedItems] = useState([]);

    // const getFeaturedItems = () => {
    //     axios.get("http://localhost:5000/featuredItems?_limit=3")
    //         .then((response) => {
    //             setFeaturedItems(response.data);
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // }

    const getFeaturedItems = async () => {
        try {
            const response = await axios.get("http://localhost:5000/featuredItems?_limit=3");
            setFeaturedItems(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    // useEffect(() => {
    //     getFeaturedItems();
    // }, []);

    return (
        <div className="featured">
            <h2>Why Choose Us?</h2>
            <ul className="clearfix">
                {featuredItems.length === 0 &&<button onClick={getFeaturedItems}>See Featured Items</button>}

                {featuredItems.length > 0 && featuredItems.map((item) => {
                    return <FeaturedItem key={item.id} value={item} />
                })}
            </ul>
        </div>
    );
};

export default Featured;