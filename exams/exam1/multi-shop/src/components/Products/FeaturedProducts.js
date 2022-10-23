import { useContext } from "react";
import ProductsList from "./ProductsList";
import ProductContext from "../../Store/product-context";

const FeaturedProducts = () => {
  const ctxProduct = useContext(ProductContext);
  const featured = ctxProduct.getFeaturedProducts();

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
