import { Routes, Route } from "react-router-dom";
import Login from "./component/Login";
import Register from "./component/Register";
import Home from "./component/Home";
import Products from "./Product/Products";
import ProductDetails from "./Product/Productdetails";
import Navbar from "./component/Navbar";
import "./App.css";
function App() {
  return (
    <Routes>

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route path="/" element={<Home />} />

      <Route path="/products" element={<Products />} />
      

      <Route path="/navbar" element={<Navbar />} />
      <Route path="/products/:id" element={<Productdetails />} />
      
    </Routes>
  );
}

export default App;