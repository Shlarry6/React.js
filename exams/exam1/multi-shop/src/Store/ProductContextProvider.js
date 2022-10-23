import { useEffect, useState } from "react";
import ProductContext from "./product-context";

const ProductContextProvider = (props) => {
    const [products, setProducts] = useState([]);

/* * * * * * * * * * * * * * Helper Functions Start* * * * * * * * * * * * * */
    const formatCategoryNames = (name) => {
        name = name.toString(); // converting name to string to avoid error with blow functions
        name = name.replace("-", " "); // replace dash with space
        name = firstLetterCap(name); // capitilize first letter in string
        return name;
    };
    const firstLetterCap = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
    };
    const countProductsByCategory = (category) => {
        let counter = 0;
        products.map((product) => {
            if (product.category === category) {
                counter +=1;
            };
        });
        return counter;
    };
/* * * * * * * * * * * * * * Helper Functions END * * * * * * * * * * * * * */
    
/* * * * * * * * * * * * * * Product and Category Functions START * * * * * * * * * * * * * */
    // function: loops through products adding 1 of each unique category to categoryNames.
    const getCategories = () => {
        let productList = getProductsFromSessionStorage();
        let categoriesArray = [];
        let productsByCategory = [];
        productList.map((product) => {
            let productCategory = product.category;
            if (!productsByCategory.some((item) => item.category === productCategory)) {
                productsByCategory.push(product);
                categoriesArray.push(product);
            };
        });
        return categoriesArray;
    };

    const getFeaturedProducts = () => {
        let productList = getProductsFromSessionStorage();
        let featuredArray = [];
        let counter = 0;
        for (var i = 0; i < productList.length; i+= 7) {
            if (counter < 8) {
                featuredArray.push(productList[i]);
                counter++;
            };
        };
        return featuredArray;
    };

    const getProduct = (id) => {
        let selected = products.filter(prod => prod.id === id);
        return selected;
    };

    const getProductsByCategory = (category) => {
        let prods = products.filter(prod => prod.category === category);
        return prods;
    };
/* * * * * * * * * * * * * * Product and Category Functions End * * * * * * * * * * * * * */

    //API get request for all products from dummyjson.com
    const getProducts = async () => {
        try {
            let prods = await fetch('https://dummyjson.com/products?limit=100');
            prods = await prods.json();
            setProducts(prods.products);
            sessionStorage.setItem("PRODUCTS", JSON.stringify(prods.products));
        } catch (error) {
            console.log(error);
        };
    };
  
    const getProductsFromSessionStorage = () => {
        if (!products.length > 0) {
            console.log("makingAPIcall");
            getProducts();
        };
        let data = sessionStorage.getItem("PRODUCTS");
        return JSON.parse(data);
    };

    useEffect(() => {
        getProductsFromSessionStorage();
    }, []);

    const productContext = {
        products: products,
        getCategories: getCategories,
        getFeaturedProducts: getFeaturedProducts,
        getProductsByCategory: getProductsByCategory,
        getProduct: getProduct,
        formatCategoryNames: formatCategoryNames,
        countProductsByCategory: countProductsByCategory,
    };

    return (
        <ProductContext.Provider
            value={productContext}>
            {props.children}
        </ProductContext.Provider>
    );
};

export default ProductContextProvider;