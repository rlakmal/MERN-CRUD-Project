import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./loginsign.css";

function Signup() {
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/register", { name, email, password })
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
    navigate("./login");
  };

  return (
    <div className="maincontainerlog">
      <div className="frontcontainerlog">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">
              <strong>Name</strong>
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              autoComplete="off"
              name="email"
              onChange={(e) => setname(e.target.value)}
            />
          </div>
          <div className="mb-3">
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
          <div className="mb-3">
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
          <button type="submit">Register</button>
          <p>Already Have an Account</p>
          <Link to="/login">Login</Link>
        </form>
      </div>
    </div>
  );
}
export default Signup;
