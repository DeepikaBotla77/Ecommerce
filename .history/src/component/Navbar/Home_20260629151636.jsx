import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <nav className="navbar">
        <h2>MyShop</h2>

        <div>
          <Link to="/home">Home</Link>
          <Link to="/">Logout</Link>
        </div>
      </nav>

      <div className="home">
        <h1>Welcome to MyShop</h1>

        <p>
          Shop the latest products at the best prices.
        </p>

        <button>Shop Now</button>
      </div>
    </>
  );
}

export default Home;