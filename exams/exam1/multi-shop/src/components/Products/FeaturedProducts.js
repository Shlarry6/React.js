import { useState, useEffect } from "react";
import ProductsList from "./ProductsList";

const FeaturedProducts = () => {
  const [featured, setFeatured] = useState([]);

  const getFeaturedProducts = async () => {
    try {
      let products = await fetch(
        "https://dummyjson.com/products?limit=8&skip=7"
      );
      products = await products.json();
      setFeatured(products.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFeaturedProducts();
  }, []);

  return (
    <div className="container-fluid pt-5 pb-3">
      <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
        <span className="bg-secondary pr-3">Featured Products</span>
      </h2>
      <ProductsList
        products={featured}
        classes={"row px-xl-5"}
        tileClasses={"col-lg-3 col-md-4 col-sm-6 pb-1"}
      />
    </div>
  );
};

export default FeaturedProducts;
