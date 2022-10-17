import React from 'react';

const ProductContext = React.createContext({
    categoryNames: [],
    featuredProducts: [],
    products: [],
    formatCategoryNames: () => {},
    countProductsByCategory: () => {}
});

export default ProductContext;