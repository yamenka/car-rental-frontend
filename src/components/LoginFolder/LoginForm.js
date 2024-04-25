import React from 'react';
import GenericForm from '../GenericForm';
import styles from '../../LoginForm.module.css';  // Importing the CSS module

const LoginForm = ({ formData, handleInputChange, handleSubmit, handleRegister }) => {
  const fields = [
    { name: 'email', label: 'Email', type: 'email', placeholder: 'Enter your email address' },
    { name: 'password', label: 'Password', type: 'password' },
  ];

  return (
    <div className={styles.loginFormContainer}>
      <div className={styles.formWrapper}>
        <h2>Login:</h2>
        <GenericForm
          formData={formData}
          fields={fields}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
        />
        <button onClick={handleRegister} className={`btn btn-link ${styles.registerLink}`}>Don't have an account? Sign up</button>
      </div>
    </div>
  );
};

export default LoginForm;
