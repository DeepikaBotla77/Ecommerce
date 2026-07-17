import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../component/Navbar";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const addToCart = async (item) => {
    try {
      // Already cart lo unda check
      const check = await fetch(
        `http://localhost:3000/cart?id=${item.id}`
      );

      const cart = await check.json();

      if (cart.length > 0) {
        alert("Product Already Added");
        return;
      }

      const res = await fetch("http://localhost:3000/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...item,
          quantity: 1,
        }),
      });

      if (res.ok) {
        alert("Added To Cart");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Navbar />

      <div className="products">
        {products.map((item) => (
          <div className="card" key={item.id}>
            <Link to={`/products/${item.id}`}>
              <img src={item.image} width="150" alt={item.title} />
              <h3>{item.title}</h3>
            </Link>

            <h3>₹ {item.price}</h3>

            <button onClick={() => addToCart(item)}>
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Products;