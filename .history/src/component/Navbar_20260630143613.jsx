import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>MyShop</h2>
      <center
      <ul>
        <li><Link to="/home">Home</Link></li>

        <li><Link to="/products">Products</Link></li>
        <li><Link to="/register">Register</Link></li>

        <li><Link to="/">Logout</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;