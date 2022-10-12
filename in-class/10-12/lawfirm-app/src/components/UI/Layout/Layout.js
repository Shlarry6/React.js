import Header from "../../header/Header";
import Footer from "../../footer/Footer";
import './Layout.css';

const Layout = ({children}) => {
    return (
        <div>
            <Header />
            <div id="contents">
                <div className="clearfix">
                    {children}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Layout;