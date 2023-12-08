import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post
      ('http://localhost:3000/login',
       {username,password},
       );

      const userType = response.data.userType;

      switch (userType) {
        case 'staff':
          navigate('../staff/Dashboard');
          break;
        case 'admin':
          navigate('./Dashboard');
          break;
        case 'manager':
          navigate('../manager/Dashboard');
          break;
        default:
          navigate('/dashboard');
          break;
      }

    } catch (error) {
        if (error.response && error.response.status === 401) {
            alert('Wrong username or password. Please try again.');
          } else {
            console.error('Login failed:', error.message);
          }
        }
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
