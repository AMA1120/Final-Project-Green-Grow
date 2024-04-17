import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory(); // Get history object for redirection

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError('Please enter both username and password.');
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/farmers/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (response.ok) {
        // Assuming the backend responds with a success status code (e.g., 200)
        const data = await response.json();
        // Redirect the user to a common landing page
        history.push('/FarmerHome');
        console.log('Login successful');
      } else {
        // Handle login failure (e.g., display error message)
        setError('Invalid username or password');
        console.log('Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
      // Handle error (e.g., display error message)
      setError('Error during login. Please try again.');
    }
  };

  return (
    <div className="login-background">
      <form onSubmit={handleSubmit} className="login-form">
        <h3>Login Here</h3>

        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="Enter username"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Enter password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <span className="error">{error}</span>}

        <button type="submit" className="login-btn">
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;
