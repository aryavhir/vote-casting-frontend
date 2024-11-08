
import Cookies from 'js-cookie';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UserLogin.css';

function UserLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(null);

  const navigate = useNavigate();

  const handleLogin = () => {
    // Check if the entered username and password match the allowed credentials
    if (username === 'aryavhir' && password === '12345678') {
      // If credentials match, proceed with login
      Cookies.set('token', 'dummy-token', { secure: true, sameSite: 'strict' });
  
      // Save the token to local storage
      localStorage.setItem('token', 'dummy-token');
  
      // Redirect to the dashboard after successful login
      navigate('/admin');
    } else {
      // If credentials do not match, display error message
      setLoginError('Invalid username or password.');
    }
  };
  
  

  return (
    <div className="login-container">
      <h2>User Login</h2>
      <form className="form">
        <input
          type="text"
          className="form-input"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          className="form-input"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin} className="form-button">
          Login
        </button>
        {loginError && <p className="error-message">{loginError}</p>}
      </form>
    </div>
  );
}

export default UserLogin;
