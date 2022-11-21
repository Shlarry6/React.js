import axios from 'axios';
import { useState, useEffect } from 'react'
import Main from "../UI/Main/Main";

const NewsDetail = (props) => {
    const [newsItem, setNewsItem] = useState();

    const getNewsItem = async () => {
        try {
            const result = await axios.get(`http://localhost:5000/news/${props.id}`);
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
                <div className="images">
                    <img src={require(`../../Assets/images/${newsItem.image}`)} alt="Img" height="237" width="205" />
                </div>
                <div className="details">
                    <p className="info">
                        {newsItem.date} by <span className="author">{newsItem.author}</span>
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