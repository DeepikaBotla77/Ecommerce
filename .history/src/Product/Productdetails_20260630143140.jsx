import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../component/Navbar";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  return (
    <>
      <Navbar />

      <div className="details">
        <img src={product.image} width="250" alt={product.title} />

        <h2>{product.title}</h2>

        <h3>₹ {product.price}</h3>

        <h4>{product.category}</h4>

        <p>{product.description}</p>

        <h4> {product.rating?.rate}</h4>
      </div>
    </>
  );
}

export default ProductDetails;