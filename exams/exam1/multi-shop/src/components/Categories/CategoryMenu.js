import { useEffect, useState } from "react";

const formatCategoryNames = (name) => {
    name = name.replace("-", " "); // replace dash with space
    name = firstLetterCap(name); // capitilize first letter in string
    return name;
  };
  const firstLetterCap = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

const CategoryMenu = () => {
    const [categoryNames, setCategoryNames] = useState([]);

    const getCategoryNames = async () => {
        // API call for get all category names from dummyjson.com
        try {
          // try catch block incase we have errors in our async await function call
          let categories = await fetch("https://dummyjson.com/products/categories"); // calling API endpoint product categories
          categories = await categories.json(); // converting the promise response to json().
          setCategoryNames(categories); // using state setting to set category names to categories array
        } catch (error) {
          console.log(error); // logging any potential errors.
        }
      };

      

      useEffect(() => {
        getCategoryNames();
    }, []);

  return (
    <div className="col-lg-3 d-none d-lg-block">
      <a
        className="btn d-flex align-items-center justify-content-between bg-primary w-100"
        data-toggle="collapse"
        href="#navbar-vertical"
        style={{ height: "65px", padding: "0 30px" }}
      >
        <h6 className="text-dark m-0">
          <i className="fa fa-bars mr-2"></i>Categories
        </h6>
        <i className="fa fa-angle-down text-dark"></i>
      </a>
      <nav
        className="collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 bg-light"
        id="navbar-vertical"
        style={{ width: `calc(100% - 30px)`, zIndex: 999 }}
      >
        <div className="navbar-nav w-100">
          {categoryNames.map((name, index) => (
            <a
              key={index}
              href={`/products/category/${name}`}
              className="nav-item nav-link"
            >
              {formatCategoryNames(name)}
            </a>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default CategoryMenu;
