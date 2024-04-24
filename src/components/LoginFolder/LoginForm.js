import React from 'react';
import GenericForm from '../GenericForm';

const LoginForm = ({ formData, handleInputChange, handleSubmit, handleRegister }) => {
  const fields = [
    { name: 'email', label: 'Email', type: 'email', placeholder: 'Enter your email address' },
    { name: 'password', label: 'Password', type: 'password' },
  ];

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="w-100" style={{ maxWidth: '400px' }}>
        <h2>Login:</h2>
        <GenericForm
          formData={formData}
          fields={fields}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
        />
        <button onClick={handleRegister} className="btn btn-link">Don't have an account? Sign up</button>
      </div>
    </div>
  );
};

export default LoginForm;