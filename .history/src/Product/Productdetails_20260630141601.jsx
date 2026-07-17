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

  // Add To Cart Function
  const addToCart = async () => {
    try {
      const res = await fetch("http://localhost:3000/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });

      if (res.ok) {
        alert("Product Added To Cart");
      } else {
        alert("Failed to Add Product");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />

      <div className="details">
        <img src={product.image} width="250" alt={product.title} />

        <h2>{product.title}</h2>

        <h3>₹ {product.price}</h3>

        <h4>{product.category}</h4>

        <p>{product.description}</p>

        <h4>⭐ {product.rating?.rate}</h4>

        <button onClick={addToCart}>Add To Cart</button>
      </div>
    </>
  );
}

export default ProductDetails;