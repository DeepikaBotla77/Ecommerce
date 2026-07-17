import { Link } from "react-router-dom";

{products.map((item) => (
  <div className="card" key={item.id}>

    <Link to={`/products/${item.id}`}>
      <img src={item.image} alt={item.title} width="150" />

      <h3>{item.title}</h3>
    </Link>

    <p>₹ {item.price}</p>

  </div>
))}