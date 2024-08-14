import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LoginPage.css';

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleToggle = () => setIsLogin(!isLogin);

  const handleBackClick = () => {
    navigate('/');
    // Kein Scrollen zu MyWork, wenn auf der Login-Seite
  };

  return (
    <div className="login-container">
      <button onClick={handleBackClick} className="back-button">
        &larr; Back
      </button>
      <h1>{isLogin ? 'Login' : 'Register'}</h1>
      <form className="login-form">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" required />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" required />

        {!isLogin && (
          <>
            <label htmlFor="confirm-password">Confirm Password:</label>
            <input type="password" id="confirm-password" required />
          </>
        )}

        <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
      </form>
      <button className="toggle-button" onClick={handleToggle}>
        {isLogin ? 'Create an Account' : 'Already have an account?'}
      </button>
    </div>
  );
};

export default LoginPage;
