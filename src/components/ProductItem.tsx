/** @format */

import {Product} from "../interfaces/Product";

interface IProductItem {
  product: Product;
}
function ProductItem({product}: IProductItem) {
  return (
    <li key={product.id}>
      <div className="product-item">
        <div className="box-info">
          <div className="box-info--content">
            <div className="description">
              <h1>{product.name}</h1>
              <p>{product.description}</p>
            </div>
            <div className="tags">
              <span>
                {product.categories.length === 0
                  ? product.categories[0]
                  : product.categories.join(" / ")}
              </span>
            </div>
          </div>
          <div className="box-info--footer">
            <ul>
              {product.plans.map((plan, i) => {
                return (
                  <li key={i}>
                    <span>{plan.name}</span>
                    <h3>
                      {plan.price === 0 ? "Free" : plan.price}
                      <sup>{plan.price !== 0 && "€"}</sup>
                    </h3>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </li>
  );
}

export default ProductItem;
