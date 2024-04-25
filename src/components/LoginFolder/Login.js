import React, { useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../../apiConfig';
import LoginForm from './LoginForm';
import Register from '../RegisterFolder/Register';
import styles from '../../Login.module.css';  

const Login = ({ handleLoginSuccess }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [showRegister, setShowRegister] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_BASE_URL}Account/login`, formData);
      localStorage.setItem('token', response.data.token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
      setFormData({ email: '', password: '' });
      setError('');
      handleLoginSuccess(response.data.token);
    } catch (error) {
        console.error('Error logging in:', error.response);
        setError(`Login error: ${error.response?.data?.message || 'Invalid email or password'}`);
        setFormData({ ...formData, password: '' });
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
        {error && <div className={`${styles.errorAlert}`}>{error}</div>}
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
