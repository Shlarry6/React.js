import TopBar from "./TopBar";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <>
      <TopBar />
      <NavBar />
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
