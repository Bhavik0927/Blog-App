import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../../Store/auth/UserSlice";
import { toast } from "react-toastify";
import "../../shared/styles/CSS/Login.css";
import { FiMail } from "react-icons/fi";
import { FiLock } from "react-icons/fi";
import { api } from "../../shared/constants/Constant";

const Login = () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await api.post(
        "/login",
        { email, password },
      );
      dispatch(addUser(res.data.login_user));
      toast.success("Login Successfully");
      Navigate("/");
    } catch (error) {
      toast.error("Invalid Credentials...", error.message);
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
