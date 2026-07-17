import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!product) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <img src={product.image} width="200" alt={product.title} />
      <h2>{product.title}</h2>
      <h3>₹ {product.price}</h3>
      <p>{product.description}</p>
      <p>{product.category}</p>
    </div>
  );
}

export default ProductDetails;