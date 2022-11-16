import PracticeDetail from "../components/Practices/PracticeDetail"
import PracticesSidebar from "../components/Practices/PracticesSidebar";

const PracticesItem = () => {
    return (
        <div id="contents">
            <div className="clearfix">
                <PracticesSidebar />
                <PracticeDetail id={window.location.pathname.split("/").pop()} />
            </div>
        </div>
    );
};

export default PracticesItem;