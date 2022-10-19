import ProductContextProvider from './Store/ProductContextProvider';
import Layout from "./components/Layout/Layout";
import CategoryList from "./components/Categories/CategoryList";
import FeaturedProducts from "./components/Products/FeaturedProducts";
import ProductsByCategory from "./components/Products/ProductsByCategory";
import ProductDetail from "./components/Products/ProductDetail";

const App = () => {
  let content;

  switch (window.location.pathname) {
    case "/":
      content = 
        <ProductContextProvider>
          <FeaturedProducts />
        </ProductContextProvider>;
      break;
    case "/categories":
      content = (
        <ProductContextProvider>
          <CategoryList />
        </ProductContextProvider>
      );
      break;
    case window.location.pathname.match(/\/products\/category\/.*/)?.input:
      const endOfPath = window.location.pathname.match(/(?<=category\/)(\S+)/);
      content = (
        <ProductContextProvider>
          <ProductsByCategory category={endOfPath[0]}
          classes="container-fluid"/>
        </ProductContextProvider>
      );
      break;
      case window.location.pathname.match(/\/products\/.*/)?.input:
        const id = window.location.pathname.match(/(?<=products\/)(\S+)/);
        content = (
          <ProductContextProvider>
            <ProductDetail id={id[0]}/>
          </ProductContextProvider>
        );
        break;
    default:
      content = <div>The content you requested could not be found.</div>;
  }

  return <Layout>{content}</Layout>;
};

export default App;
