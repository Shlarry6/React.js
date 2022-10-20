import { useEffect, useState } from "react";
import ProductContext from "./product-context";
const defaultProduct = { images: [], title: "", description: "" };

const ProductContextProvider = (props) => {
    const [categoryNames, setCategoryNames] = useState([]);
    const [featured, setFeatured] = useState([]);
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState(defaultProduct);
    // const [display, setDisplay] = useState(defaultProduct.images[0]);

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

    // setting featured products from productList saved from dummyjson.com
    const setFeaturedProducts = (productList) => {
        let featuredArray = [];
        let counter = 0;
        for (var i = 0; i < productList.length; i+= 7) {
            if (counter < 8) {
                featuredArray.push(productList[i]);
                counter++;
            };
        };
        setFeatured(featuredArray);
    };

    const setProductById = (id) => {
        console.log("productID:", id);
        let cProduct = products.filter(prod => prod.id === id);
        console.log(cProduct);
        setProduct(cProduct);
    };

    //API get request for all products from dummyjson.com
    const getProducts = async () => {
        try {
            console.log(products.length);
            if (products.length === 0) {
                let prods = await fetch('https://dummyjson.com/products?limit=100');
                prods = await prods.json();
                setStates(prods.products);
            };
        } catch (error) {
            console.log(error);
        };
    };

    const setStates = (products) => {
        console.log("setting");
        setProducts(products);
        setCategoriesByProductsList(products);
        setFeaturedProducts(products);
    };

    useEffect(() => {
        getProducts();
    }, []);

    const productContext = {
        categoryNames: categoryNames,
        featuredProducts: featured,
        products: products,
        product: product,
        // display: display,
        formatCategoryNames: formatCategoryNames,
        countProductsByCategory: countProductsByCategory,
        setProductById: setProductById
    };

    return (
        <ProductContext.Provider
            value={productContext}>
            {props.children}
        </ProductContext.Provider>
    );
};

export default ProductContextProvider;