import { useState, useEffect } from "react";

import Layout from "./components/Layout/Layout";
import CategoryList from "./components/Categories/CategoryList";
import ProductsList from "./components/Products/ProductsList";
import FeaturedProducts from "./components/Products/FeaturedProducts";

const App = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      let products = await fetch("https://dummyjson.com/products?limit=100");
      products = await products.json();
      setProducts(products.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
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
    default:
      content = <div>The content you requested could not be found.</div>;
  }

  return <Layout>{content}</Layout>;
};

export default App;
