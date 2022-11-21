import PracticeDetail from "../components/Practices/PracticeDetail"
import PracticesSidebar from "../components/Practices/PracticesSidebar";

import { useParams } from 'react-router-dom';

const PracticesItem = () => {
    const { practiceId } = useParams();

    return (
        <div id="contents">
            <div className="clearfix">
                <PracticesSidebar />
                <PracticeDetail id={practiceId} />
            </div>
        </div>
    );
};

export default PracticesItem;