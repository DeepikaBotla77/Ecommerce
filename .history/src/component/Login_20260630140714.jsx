import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        `http://localhost:3000/user?email=${email}&password=${password}`
      );

      const data = await res.json();

      if (data.length > 0) {
        alert("Login Successful");
        navigate("/home");
      } else {
        alert("Invalid Email or Password");
      }
    } catch (error) {
      console.log(error);
      alert("Server Error");
    }
  };

  return (
   <div>
    <div className="container">
      <form className="box" onSubmit={onLogin}>
        <h1>Login</h1>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />

        <button type="submit">Login</button>

        <p>
          New User? <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
   
  );
}

export default Login;