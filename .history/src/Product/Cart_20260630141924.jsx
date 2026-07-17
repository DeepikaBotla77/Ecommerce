import { useEffect, useState } from "react";

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/cart")
      .then((res) => res.json())
      .then((data) => setCart(data));
  }, []);const addToCart = async () => {
  console.log(product);

  try {
    const res = await fetch("http://localhost:3000/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });

    console.log("Status:", res.status);

    const data = await res.json();
    console.log(data);

    alert("Product Added");
  } catch (err) {
    console.log(err);
  }
};

  return (
    <div>
      <h1>My Cart</h1>

      {cart.map((item) => (
        <div key={item.id}>
          <img src={item.image} width="120" alt={item.title} />

          <h3>{item.title}</h3>

          <h4>₹ {item.price}</h4>

          <button>Remove</button>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default Cart;