import { Link } from "react-router-dom";
import { PRODUCTS } from "./data";

function ProductList() {
  return (
    <div>
      <h1>Produkter</h1>
      <ul>
        {PRODUCTS.map((p) => (
          <li key={p.id}>
            <Link to={`/product/${p.id}`}>{p.name}</Link> - {p.price} kr
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
