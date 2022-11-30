import { useParams } from 'react-router-dom';
import NewsDetail from "../components/News/NewsDetail";
import NewsSidebar from '../components/News/NewsSidebar';

const NewsDetailPage = () => {

    const params = useParams();
    return (<>
        <NewsSidebar />
        <NewsDetail id={params.newsid} />
    </>
    );
}

export default NewsDetailPage;