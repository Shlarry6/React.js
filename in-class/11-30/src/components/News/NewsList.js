import { useState, useEffect } from "react";
import axios from "axios";

import './News.css';
import Main from "../UI/Main/Main";
import NewsItem from "./NewsItem";

const NewsList = () => {

  //Declare a state variable to hold the list of news items
  const [news, setNews] = useState([]);

  //Define a data retrieval function
  const getNews = async () => {
    try {
      const response = await axios.get("http://localhost:5000/news");
      console.log("data is: ", response.data);
      
      //Update the state variable with the data retrieved from the API
      setNews(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Call the data retrieval function once when component first loads
  useEffect(() => {
    getNews();
  }, []);
  
  return (
    <Main>
      <h1>News</h1>
      <ul className="news">
        {news.map(newsItem => {
            return <NewsItem key={newsItem.id} id={newsItem.id} title={newsItem.title} date={newsItem.date} text={newsItem.text} author={newsItem.author} image={newsItem.image} />
        })}
      </ul>
    </Main>
  );
};

export default NewsList;
