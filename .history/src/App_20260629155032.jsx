import { Routes, Route } from "react-router-dom";
import Login from "./component/Login";
import Register from "./component/Navbar/Register";
import Home from "./component/Navbar/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;