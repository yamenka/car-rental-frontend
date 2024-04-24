import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../../apiConfig';
import RegisterForm from './RegisterForm';
import Login from '../LoginFolder/Login';

const Register = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  useEffect(() => {
    if (isLoggingIn) {
      console.log('Redirecting to login page...');
    }
  }, [isLoggingIn]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const registrationResponse = await axios.post(`${API_BASE_URL}account/register`, formData);
      console.log(registrationResponse.data);
      // Reset form data after successful registration
      setFormData({ email: '', password: '' });
      setError('');
      setIsLoggingIn(true); // Redirect to login after registration
    } catch (error) {
      console.error('Error registering user:', error);
      setFormData({ email: '', password: '' });
      if (error.response && error.response.data && error.response.data.length > 0) {
        setError(error.response.data[0].description || 'Error registering the user');
      } else {
        setError('Unexpected error occurred. Please try again.');
      }
    }
  };

  const handleLogin = () => {
    setIsLoggingIn(true);
  };

  if (isLoggingIn) {
    return <Login />;
  }

  return (
    <div>
      {error && <div className="alert alert-warning" role="alert">{error}</div>}
        <RegisterForm
          formData={formData}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          handleLogin={handleLogin}
        />
    </div>
  );
};

export default Register;