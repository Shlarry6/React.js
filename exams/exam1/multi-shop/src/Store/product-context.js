import React from 'react';

const ProductContext = React.createContext({
    categoryNames: [],
    featuredProducts: [],
    products: [],
    // product: {},
    // display: '',
    formatCategoryNames: () => {},
    countProductsByCategory: () => {},
});

export default ProductContext;