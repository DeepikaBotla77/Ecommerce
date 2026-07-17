import { Routes, Route } from "react-router-dom";

import Login from "./component/Login";
import Register from "./component/Register";
import Home from "./component/Home";
import Products from "./Product/Products";
import ProductDetails from "./Product/ProductDetails";
import Addcart from "./Product/Addcart";
function App() {
  return (
    <Routes>

      <Route path="/" element={<Login />} />

      <Route path="/register" element={<Register />} /

      <Route path="/home" element={<Home />} />

      <Route path="/products" element={<Products />} />

      <Route path="/products/:id" element={<ProductDetails />} />
      <R
    </Routes>
  );
}

export default App;