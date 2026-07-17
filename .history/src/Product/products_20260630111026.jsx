import { useEffect, useState } from "react";

function Products() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>

      <h1>Products</h1>

      <div className="products">

        {products.map((item) => (

          <div className="card" key={item.id}>

            <img src={item.image} alt={item.title} />

            <h3>{item.title}</h3>

            <h2>₹ {item.price}</h2>

            <button>Add To Cart</button>

          </div>

        ))}

      </div>

    </div>
  );
}

export default roducts;