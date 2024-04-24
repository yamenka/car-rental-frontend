import React, { useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../apiConfig';  // Adjust the path based on your project structure

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${API_BASE_URL}Account/login`, { email, password });
      console.log('Login successful', response.data);
      // Handle login logic here, like redirecting or saving the token
      // e.g., redirect to homepage or dashboard
      // window.location.href = '/home'; (as an example of redirection)
    } catch (error) {
      console.error('Login error', error);
      // Optionally handle error more visibly to the user
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;