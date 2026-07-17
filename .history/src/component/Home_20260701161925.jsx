import { Link } from "react-router-dom";

function Home() {
  if(localS)
  return (
    <div>
      <h1>Welcome To My Shop</h1>

      <Link to="/products">
        <button>View Products</button>
      </Link>

      <br /><br />

      <Link to="/">Logout</Link>
    </div>
  );
}

export default Home;