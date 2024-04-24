import React, { useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../apiConfig';  // Adjust the path based on your project structure

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${API_BASE_URL}Account/register`, { email, password });
      console.log('Registration successful', response.data);
      // Handle post-registration logic here, e.g., redirect to login or display a success message
    } catch (error) {
      console.error('Registration error', error);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;