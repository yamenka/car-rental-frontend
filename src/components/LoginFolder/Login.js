import React, { useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../../apiConfig';
import LoginForm from './LoginForm';
import Register from '../RegisterFolder/Register';

const Login = ({ handleLoginSuccess }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [showRegister, setShowRegister] = useState(false); // State to toggle between Login and Register

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_BASE_URL}account/login`, formData);
      localStorage.setItem('token', response.data.token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
      setFormData({ email: '', password: '' });
      setError('');
      handleLoginSuccess(response.data.token);  // Notify the parent component of successful login
    } catch (error) {
      console.error('Error logging in:', error);
      setFormData({ email: '', password: '' });
      setError('Invalid email or password');
    }
  };

  const handleRegister = () => {
    setShowRegister(true);
  };

  if (showRegister) {
    return <Register />;
  } else {
    return (
      <div>
        {error && <div className="alert alert-warning" role="alert">{error}</div>}
        <LoginForm
          formData={formData}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          handleRegister={handleRegister}
        />
      </div>
    );
  }
};

export default Login;