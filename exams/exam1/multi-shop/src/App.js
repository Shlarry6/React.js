import { useState, useEffect } from "react";

import Layout from "./components/Layout/Layout";
import CategoryList from "./components/Categories/CategoryList";
import FeaturedProducts from "./components/Products/FeaturedProducts";
import ProductsByCategory from "./components/Products/ProductsByCategory";
import ProductDetail from "./components/Products/ProductDetail";

const App = () => {

  useEffect(() => {
  }, []);

  let content;

  switch (window.location.pathname) {
    case "/":
      content = 
        <>
          <FeaturedProducts />
        </>;
      break;
    case "/categories":
      content = (
        <>
          <CategoryList />
        </>
      );
      break;
    case window.location.pathname.match(/\/products\/category\/.*/)?.input:
      const endOfPath = window.location.pathname.match(/(?<=category\/)(\S+)/);
      content = (
        <>
          <ProductsByCategory category={endOfPath[0]}
          classes="container-fluid"/>
        </>
      );
      break;
      case window.location.pathname.match(/\/products\/.*/)?.input:
        const id = window.location.pathname.match(/(?<=products\/)(\S+)/);
        content = (
          <>
            <ProductDetail id={id[0]}/>
          </>
        );
        break;
    default:
      content = <div>The content you requested could not be found.</div>;
  }

  return <Layout>{content}</Layout>;
};

export default App;
