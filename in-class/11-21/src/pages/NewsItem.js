import NewsDetail from "../components/News/NewsDetail";
import NewsSidebar from "../components/News/NewsSidebar";

import { useParams } from 'react-router-dom';

const NewsItem = () => {
    const { newsId } = useParams();

    return (
        <>
            <NewsSidebar />
            <NewsDetail id={newsId} />
        </>
    );
};

export default NewsItem;