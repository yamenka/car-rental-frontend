import React from 'react';
import GenericForm from '../GenericForm';

const RegisterForm = ({ formData, handleInputChange, handleSubmit, handleLogin }) => {
  const fields = [
    { name: 'email', label: 'Email', type: 'email', placeholder: 'Enter your email address' },
    { name: 'password', label: 'Password', type: 'password' },
  ];

  return (
  <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
    <div className="w-100" style={{ maxWidth: '400px' }}>
      <h2>Sign up:</h2>
    <GenericForm
      formData={formData}
      fields={fields}
      handleInputChange={handleInputChange}
      handleSubmit={handleSubmit}
    />
    <button onClick={handleLogin} className="btn btn-link">Already have an account? Login</button>
    </div>
  </div>
  );
};

export default RegisterForm;