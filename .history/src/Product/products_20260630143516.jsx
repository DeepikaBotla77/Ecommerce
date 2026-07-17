import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Products() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <>
      <Navbar />

      <div className="products">

        {products.map((item) => (

          <div className="card" key={item.id}>

            <Link to={`/products/${item.id}`}>

              <img src={item.image} width="150" />

              <h3>{item.title}</h3>

            </Link>

            <h2>₹ {item.price}</h2>

            <button>Add To Cart</button>

          </div>

        ))}

      </div>

    </>
  );
}

export default Products;