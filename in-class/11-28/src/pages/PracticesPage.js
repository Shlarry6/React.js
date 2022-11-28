import PracticesSidebar from "../components/Practices/PracticesSidebar";
import Practices from "../components/Practices/Practices";
import { Outlet } from "react-router-dom";

const PracticesPage = () => {
    return (
        <>
            <PracticesSidebar />
            <Practices />
            <Outlet />
        </>
    );
};

export default PracticesPage;