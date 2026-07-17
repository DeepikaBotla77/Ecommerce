import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch product");
        }
        return res.json();
      })
      .then((data) => setProduct(data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!product) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="details">

      <img
        src={product.image}
        alt={product.title}
        width="250"
      />

      <h2>{product.title}</h2>

      <h3>₹ {product.price}</h3>

      <h4>Category : {product.category}</h4>

      <p>{product.description}</p>

      <h4>⭐ {product.rating.rate}</h4>

      <h4>Reviews : {product.rating.count}</h4>

      <button>Add To Cart</button>

    </div>
  );
}

export default ProductDetails;