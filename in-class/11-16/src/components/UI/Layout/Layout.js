import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';

import './Layout.css';

const Layout = ({children}) => {
    return (
        <>
        <Header />
        <div id="contents">
          <div className="clearfix">
            {children}
          </div>
        </div>
        <Footer />
        </>
    );
}

export default Layout;