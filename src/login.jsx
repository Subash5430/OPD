import React from 'react';
import './Login.css';
import { NavLink } from 'react-router-dom';

export const Login = () => {
  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h2 className="login-title">Welcome Back</h2>
        <form className="login-form">
          <input
            className="login-input"
            placeholder="Enter username"
            type="text"
          />
          <input
            className="login-input"
            placeholder="Enter password"
            type="password"
          />
          <button className="login-button" type="submit">
            Login
          </button>
        </form>
        <div className='sign-up'>
        <NavLink to="/">Sign Up</NavLink>
        </div>
      </div>
    </div>
  );
};
