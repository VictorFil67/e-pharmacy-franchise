import { ProductItem } from "../ProductItem/ProductItem";

export const Items = ({ currentItems, active, shopId }) => {
  return (
    <>
      {currentItems &&
        currentItems.map((product) => (
          //   <div key={idx}>
          //     <h3>Item #{item}</h3>
          //   </div>
          <ProductItem
            key={product._id}
            photo={product.photo}
            name={product.name}
            price={product.price}
            suppliers={product.suppliers}
            active={active}
            shopId={shopId}
            productId={product._id}
          />
        ))}
    </>
  );
};
