import { Link, useNavigate } from "react-router-dom";

function Register() {

  const navigate = useNavigate();

  function register() {
    alert("Registered Successfully");
    navigate("/");
  }
  

  return (
    <div>

      <h1>Register Page</h1>

      <input type="text" placeholder="Enter Name" />
      <br /><br />

      <input type="email" placeholder="Enter Email" />
      <br /><br />

      <input type="password" placeholder="Enter Password" />
      <br /><br />

      <button onClick={register}>Register</button>

      <p>
        Already User? <Link to="/">Login</Link>
      </p>

    </div>
  );
}

export default Register;