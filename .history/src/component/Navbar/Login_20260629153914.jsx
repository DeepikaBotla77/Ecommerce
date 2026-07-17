import { Link, useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  function login() {
    navigate("/home");
  }

  return (
    <div>
         <h1>Login Page</h1>
         <input type="email" placeholder="Enter Email"/>
         <br/><br/>
         <input type="password" placeholder="Enter Password"/>
         <br/><br/>
         <button onclick={login}>Login</button>



    </div>
  );
}

export default Login;