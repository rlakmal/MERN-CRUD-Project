import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./loginsign.css";

function Login() {
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/login", { email, password })
      .then((result) => {
        console.log(result);
        if (result.data === "Success") {
          if (email === "useradmin@gmail.com") {
            navigate("/home");
            alert("Login Successfull");
          } else {
            navigate("/DashBoard");
          }
        } else {
          alert("Incorrect Email or Password");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="maincontainerlog">
      <div className="frontcontainerlog">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              onChange={(e) => setemail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              onChange={(e) => setpassword(e.target.value)}
            />
          </div>
          <button type="submit">LOG IN</button>
          <p>Don't You Have an Account</p>
          <Link to="/" className="sign">
            Sign UP
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
