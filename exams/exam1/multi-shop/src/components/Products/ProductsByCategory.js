import { useState, useEffect } from "react";
import ProductSideBar from "./ProductSidebar";
import ProductsList from "./ProductsList";

const ProductsByCategory = (props) => {
  const [products, setProducts] = useState([]);

  const getProductsByCategory = async () => {
    try {
      let products = await fetch(
        `https://dummyjson.com/products/category/${props.category}`
      );
      products = await products.json();
      setProducts(products.products);
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    getProductsByCategory();
  }, []);

  return (
    <div className={props.classes}>
      <div className="row px-xl-5">
        <ProductSideBar />
        <div className="col-lg-9 col-md-8">
          <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
            <span className="bg-secondary pr-3">{props.category}</span>
          </h2>
          <ProductsList
            products={products}
            classes={"row pb-3"}
            tileClasses={"col-lg-4 col-md-6 col-sm-6 pb-1"}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductsByCategory;
