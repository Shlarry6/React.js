import PracticesSidebar from "../components/Practices/PracticesSidebar";
import PracticeDetail from "../components/Practices/PracticeDetail";
import {useParams} from 'react-router-dom';

const PracticesDetailPage = () => {
    const params = useParams();
    return (
        <>
            <PracticesSidebar />
            <PracticeDetail id={params.practiceid} />
        </>
    );
}   

export default PracticesDetailPage;