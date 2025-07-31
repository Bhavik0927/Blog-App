import black2 from '../Images/black2.jpg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addUser } from '../Store/UserSlice';
import { toast } from 'react-toastify';

import '../CSS/Login.css';

const Login = () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState('bhaviktembhare2@gmail.com');
  const [password, setPassword] = useState('Bhavik');

  const handleLogin = async () => {
    try {
      const res = await axios.post('http://localhost:4000/login', { email, password }, { withCredentials: true });
      dispatch(addUser(res.data));
      toast.success("Login Successfully");
      Navigate('/');
    } catch (error) {
      console.log(error);
      toast.error('Invalid Credentials...');
    }
  };

  return (
    <div className="login-container">
      <div className="left-panel" style={{ backgroundImage: `url(${black2})` }}>
        <button className="superadmin-button">Superadmin Login</button>
        <div className="logo-footer">© Nestvested Limited {new Date().getFullYear()}</div>
      </div>

      <div className="right-panel">
        <h2 className="login-header">Welcome, login to your account.</h2>

        <div className="input-group">
          <label htmlFor="email" className="input-label">Email Address:</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="name@domain.com"
            className="input-field"
          />
        </div>

        <div className="input-group">
          <label htmlFor="password" className="input-label">Password:</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Your Password"
            className="input-field"
          />
        </div>

        <button className="login-button" onClick={handleLogin}>Sign In Here</button>

        <div className="footer-link">
          <a href="#">Lost your password?</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
