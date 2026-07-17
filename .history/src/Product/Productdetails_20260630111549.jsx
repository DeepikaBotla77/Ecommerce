import { useEffect, useState } from "react";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="products">
      {products.map((item) => (
        <div className="card" key={item.id}>
          <img src={item.image} alt={item.title} />

          <h3>{item.title}</h3>

          <p><strong>Category:</strong> {item.category}</p>

          <p><strong>Price:</strong> ₹{item.price}</p>

          <p><strong>Rating:</strong> ⭐ {item.rating.rate}</p>

          <p><strong>Reviews:</strong> {item.rating.count}</p>

          <p>{item.description.substring(0, 80)}...</p>

          <button>Add To Cart</button>
        </div>
      ))}
    </div>
  );
}

export default Products;