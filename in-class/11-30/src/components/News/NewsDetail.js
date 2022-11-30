import axios from 'axios';
import { useState, useEffect } from 'react'

import Main from "../UI/Main/Main";





const NewsDetail = ({id}) => {

    //State variable for storing one newsItem
    const [newsItem, setNewsItem] = useState();

    // data retrieval function
    const getNewsItem = async () => {
        try {
            const result = await axios.get(`http://localhost:5000/news/${id}`);
            console.log("News item is: ", result.data);

            // Set state variable to data retrieved from API
            setNewsItem(result.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getNewsItem();
    }, []);


    if (newsItem)
        return (
            <Main>
                <div class="images">
                    <img src={require(`../../Assets/images/${newsItem.image}`)} alt="Img" height="237" width="205" />
                </div>
                <div class="details">
                    <p class="info">
                        {newsItem.date} by <span class="author">{newsItem.author}</span>
                    </p>
                    <h2>{newsItem.title}</h2>
                    <p>
                        {newsItem.text}
                    </p>
                </div>

            </Main>
        );
}

export default NewsDetail;