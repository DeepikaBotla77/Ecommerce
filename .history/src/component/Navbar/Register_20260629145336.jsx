import React from 'react'

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (user.password !== user.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    alert("Registration Successful");

    navigate("/");
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleRegister}>
        <h1>Register</h1>

        <input
          type="text"
          placeholder="Enter Name"
          name="name"
          value={user.name}
          onChange={handleChange}
        />

        <input
          type="email"
          placeholder="Enter Email"
          name="email"
          value={user.email}
          onChange={handleChange}
        />

        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          value={user.password}
          onChange={handleChange}
        />

        <input
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          value={user.confirmPassword}
          onChange={handleChange}
        />

        <button type="submit">Register</button>

        <p>
          Already have an account?
          <Link to="/"> Login</Link>
        </p>
      </form>
    </div>
  );
}


export default Register

