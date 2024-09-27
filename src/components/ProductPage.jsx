import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { PRODUCTS } from "./data";
import { useNavigate } from "react-router-dom";

function ProductPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const product = PRODUCTS.find((p) => p.id === id);

  /*   window.dataLayer is a global JavaScript "Array" used by Google Tag Manager (GTM)
   */
  useEffect(() => {
    if (product) {
      window.dataLayer = window.dataLayer || [];
      //All data inside the "object" must added in the google analytics site "Tag manager"
      window.dataLayer.push({
        event: "view_product", //as trigger/ Custom Event
        product_id: product.id, //as Variable/ Data layer variable
        product_name: product.name, //as Variable/ Data layer variable
        product_category: product.category, //as Variable/ Data layer variable
        product_price: product.price, //as Variable/ Data layer variable
      });
    }
  }, [product]);

  if (!product) {
    return <p>Produkten hittades inte.</p>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>Kategori: {product.category}</p>
      <p>Pris: {product.price} kr</p>
      <p>{product.description}</p>
      <button onClick={() => navigate("..")}> Go back</button>
    </div>
  );
}

export default ProductPage;
