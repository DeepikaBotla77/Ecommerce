import { Link, useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  function login() {
    navigate("/home");
  }

  return (
    <div>
         <h1>Login Page<



    </div>
  );
}

export default Login;