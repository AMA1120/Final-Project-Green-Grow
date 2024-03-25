import React, { useState } from 'react';
import './Login.css';
import axios from 'axios'; 
import { useHistory } from 'react-router-dom'; // Import useHistory for redirection

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors] = useState({});
  const history = useHistory(); // Get history object for redirection

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/farmers/login', {
        username,
        password,
      });

      // Assuming the backend responds with a success status code (e.g., 200)
      if (response.status === 200) {
        // Redirect the user to the FarmerHome page
        history.push('/farmer');
        console.log('Login successful');
      } else {
        // Handle login failure (e.g., display error message)
        alert('Invalid username or password');
        console.log('Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
      // Handle error (e.g., display error message)
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
        {errors.username && <span className="error">{errors.username}</span>}

        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Enter password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <span className="error">{errors.password}</span>}

        <button type="submit" className="login-btn" >
          Log In
        </button>
      </form>
    </div>
  );
}

export default Login;
