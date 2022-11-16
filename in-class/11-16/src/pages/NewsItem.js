import NewsDetail from "../components/News/NewsDetail";
import NewsSidebar from "../components/News/NewsSidebar";

const NewsItem = () => {
    return (
        <>
            <NewsSidebar />
            <NewsDetail id={window.location.pathname.split("/").pop()} />
        </>
    );
};

export default NewsItem;