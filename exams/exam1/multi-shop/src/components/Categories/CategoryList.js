import { useEffect, useState } from "react";

const formatCategoryNames = (name) => {
  name = name.replace("-", " "); // replace dash with space
  name = firstLetterCap(name); // capitilize first letter in string
  return name;
};
const firstLetterCap = (name) => {
  return name.charAt(0).toUpperCase() + name.slice(1);
};

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  const setProductPerCategory = () => {
    let categoriesArray = [];
    products.map((product) => {
      let category = product.category;
      if (!categoriesArray.some((cat) => cat.category === category)) {
        categoriesArray.push(product);
      }
    });
    setCategories(categoriesArray);
  };

  const countProductsByCategory = (category) => {
    let counter = 0;
    products.map((product) => {
      if (product.category === category) {
        counter += 1;
      }
    });
    return counter;
  };

  const getProducts = async () => {
    try {
      let products = await fetch("https://dummyjson.com/products?limit=100");
      products = await products.json();
      setProducts(products.products);
      setProductPerCategory();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div className="container-fluid pt-5">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
          <span className="bg-secondary pr-3">Categories</span>
        </h2>
        <div className="row px-xl-5 pb-3">
          {categories.map((category, index) => (
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
                    <h6>{formatCategoryNames(category.category)}</h6>
                    <small className="text-body">
                      {countProductsByCategory(category.category)}
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
