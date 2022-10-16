import ProductTile from "./ProductTile";

const ProductsList = (props) => {
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
        />
      ))}
    </div>
  );
};

export default ProductsList;
