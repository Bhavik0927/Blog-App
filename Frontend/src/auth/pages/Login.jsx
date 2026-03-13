import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../../Store/auth/UserSlice";
import { toast } from "react-toastify";
import "../../shared/styles/CSS/login.css";
import { FiMail } from "react-icons/fi";
import { FiLock } from "react-icons/fi";

const Login = () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("bhaviktembhare2@gmail.com");
  const [password, setPassword] = useState("Bhavik");

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        "http://localhost:4000/login",
        { email, password },
        { withCredentials: true }
      );
      dispatch(addUser(res.data.login_user));
      toast.success("Login Successfully");
      Navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("Invalid Credentials...");
    }
  };

  return (
    <div className="login-container">

      <h1 className="login-title">Welcome Back</h1>
      <p className="login-subtitle">Sign in to continue your journey</p>

      <div className="login-card">

        <div className="input-group">
          <label htmlFor="email" className="input-label">
            Email Address:
          </label>
          <div className="input-wrapper">
            <FiMail className="input-icon" />

            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@domain.com"
              className="input-field"
            />
          </div>

        </div>

        <div className="input-group">
          <label htmlFor="password" className="input-label">
            Password:
          </label>
          <div className="input-wrapper">
            <FiLock className="input-icon" />
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Your Password"
              className="input-field"
            />
          </div>

        </div>

        <button className="login-button" onClick={handleLogin}>
          Sign In 
        </button>

         <p className="create-account">
          Don't have an account? <span><Link to="/signup">Create one </Link> </span>
        </p>


      </div>
    </div>

  );
};

export default Login;
