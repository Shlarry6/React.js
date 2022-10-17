import { useEffect, useState } from "react";
import ProductContext from "./product-context";

const ProductContextProvider = (props) => {
    const [categoryNames, setCategoryNames] = useState([]);
    const [featured, setFeatured] = useState([]);
    const [products, setProducts] = useState([]);

    const formatCategoryNames = (name) => {
        name = name.toString(); // converting name to string to avoid error with blow functions
        name = name.replace("-", " "); // replace dash with space
        name = firstLetterCap(name); // capitilize first letter in string
        return name;
    };
    const firstLetterCap = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
    };

    // count products per category for display
    const countProductsByCategory = (category) => {
        let counter = 0;
        products.map((product) => {
            if (product.category === category) {
                counter +=1;
            };
        });
        return counter;
    };
    
    // function: loops through products adding 1 of each unique category to categoryNames.
    const setCategoriesByProductsList = (productList) => {
        let categoriesArray = [];
        let productsByCategory = [];
        productList.map((product) => {
            let productCategory = product.category;
            if (!productsByCategory.some((item) => item.category === productCategory)) {
                productsByCategory.push(product);
                categoriesArray.push(product);
            };
        });
        setCategoryNames(categoriesArray);
    };

    //API get request for all products from dummyjson.com
    const getProducts = async () => {
        try {
            let products = await fetch('https://dummyjson.com/products?limit=100');
            products = await products.json();
            setProducts(products.products);
            setCategoriesByProductsList(products.products);
        } catch (error) {
            console.log(error);
        };
    };

    // API call to get featured products from dummyjson.com
    const getFeaturedProducts = async () => {
        try {
            let featured = await fetch('https://dummyjson.com/products?limit=8&skip=7');
            featured = await featured.json();
            setFeatured(featured.products);
        } catch (error) {
            console.log(error);
        };
    };

    useEffect(() => {
        getProducts();
        getFeaturedProducts();
    }, []);

    const productContext = {
        categoryNames: categoryNames,
        featuredProducts: featured,
        products: products,
        formatCategoryNames: formatCategoryNames,
        countProductsByCategory: countProductsByCategory
    };

    return (
        <ProductContext.Provider
            value={productContext}>
            {props.children}
        </ProductContext.Provider>
    );
};

export default ProductContextProvider;