import React from 'react';
import styles from '../../RegisterForm.module.css';
import GenericForm from '../GenericForm';

const RegisterForm = ({ formData, handleInputChange, handleSubmit, handleLogin }) => {
  const fields = [
    { name: 'email', label: 'Email', type: 'email', placeholder: 'Enter your email address' },
    { name: 'password', label: 'Password', type: 'password' },
  ];

  return (
    <div className={styles.registerFormContainer}>
      <div className={styles.formWrapper}>
        <h2>Sign up:</h2>
        <GenericForm
          formData={formData}
          fields={fields}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
        />
        <button onClick={handleLogin} className={`btn btn-link ${styles.loginLink}`}>Already have an account? Login</button>
      </div>
    </div>
  );
};

export default RegisterForm;