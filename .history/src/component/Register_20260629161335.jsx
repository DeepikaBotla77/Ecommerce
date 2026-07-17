import { Link, useNavigate } from "react-router-dom";

function Register() {
    const[username,setName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
let username={name,email,password}
const onRegister=(e)=>{
    e.preve
}
  const navigate = useNavigate();

  function register() {
    alert("Registered Successfully");
    navigate("/");
  }
  
  let res=await fetch("http://localhost:3000/user",{
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify({username})
    
  })

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