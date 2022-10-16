import { useState, useEffect } from "react";

import Layout from "./components/Layout/Layout";
import CategoryList from "./components/Categories/CategoryList";
import FeaturedProducts from "./components/Products/FeaturedProducts";
import ProductsByCategory from "./components/Products/ProductsByCategory";

const App = () => {
  const category = 'smartphones'

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
    case `/products/category/${category}`:
      content = (
        <>
          <ProductsByCategory category="smartphones"
          classes="container-fluid"/>
        </>
      );
      break;
    default:
      content = <div>The content you requested could not be found.</div>;
  }

  return <Layout>{content}</Layout>;
};

export default App;
