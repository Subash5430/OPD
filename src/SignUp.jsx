import React from "react";
import "./Signup.css";
import { NavLink } from "react-router-dom";

export const Signup = () => {
  return (
    <div className="signup-page"> {/* This covers the entire screen */}
      <div className="wrapper">
        <form>
          <h2>Signup</h2>

          <div className="input-field">
            <input type="text" required />
            <label>Full Name</label>
          </div>

          <div className="input-field">
            <input type="email" required />
            <label>Email</label>
          </div>

          <div className="input-field">
            <input type="password" required />
            <label>Password</label>
          </div>

          <div className="input-field">
            <input type="password" required />
            <label>Confirm Password</label>
          </div>

          <button type="submit">Register</button>

          <div className="register">
            Already have an account? <NavLink to="/login">Login</NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};
