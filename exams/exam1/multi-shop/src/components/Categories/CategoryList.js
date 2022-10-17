import { useContext } from "react";
import ProductContext from "../../Store/product-context";

const CategoryList = () => {
  const ctxProducts = useContext(ProductContext);

  return (
    <>
      <div className="container-fluid pt-5">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
          <span className="bg-secondary pr-3">Categories</span>
        </h2>
        <div className="row px-xl-5 pb-3">
          {ctxProducts.categoryNames.map((category, index) => (
            <div className="col-lg-3 col-md-4 col-sm-6 pb-1" key={index}>
              <a
                className="text-decoration-none"
                href={`/products/category/${category.category}`}
              >
                <div className="cat-item d-flex align-items-center mb-4">
                  <div
                    className="overflow-hidden"
                    style={{ width: "100px", height: "100px" }}
                  >
                    <img
                      className="img-fluid"
                      src={category.thumbnail}
                      alt=""
                    />
                  </div>
                  <div className="flex-fill pl-3">
                    <h6>{ctxProducts.formatCategoryNames(category.category)}</h6>
                    <small className="text-body">
                      {ctxProducts.countProductsByCategory(category.category)}
                    </small>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CategoryList;
