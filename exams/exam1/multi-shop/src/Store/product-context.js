import React from 'react';

const ProductContext = React.createContext({
    products: [],
    getCategories: () => {},
    getFeaturedProducts: () => {},
    getProductsByCategory: () => {},
    getProduct: () => {},
    formatCategoryNames: () => {},
    countProductsByCategory: () => {},
});

export default ProductContext;