import ProductTile from "./ProductTile";
import { useContext } from 'react';
import ProductContext from "../../Store/product-context";

const ProductsList = (props) => {
  const ctxProduct = useContext(ProductContext);

  return (
    <div className={props.classes}>
      {props.products.map((product) => (
        <ProductTile
          key={product.id}
          classes={props.tileClasses}
          price={product.price}
          title={product.title}
          id={product.id}
          thumbnail={product.thumbnail}
          href={`/products/${product.id}`}
          onClick={ctxProduct.setProductById}
        />
      ))}
    </div>
  );
};

export default ProductsList;
