import React from "react";
import Login from "./component/Navbar/Login";
import Home from "./component/Navbar/Home";
import Register from "./component/Navbar/Register";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;