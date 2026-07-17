import { useEffect, useState } from "react";

function Addcart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/cart")
      .then((res) => res.json())
      .then((data) => setCart(data));
  }, []);

  return (
    <div>
      <h1>My Cart</h1>

      {cart.map((item) => (
        <div key={item.id}>
          <img src={item.image} width="100" alt={item.title} />

          <h3>{item.title}</h3>

          <h4>₹ {item.price}</h4>

          <p>Quantity: {item.quantity}</p>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default Cart;