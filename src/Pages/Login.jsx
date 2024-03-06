import React from "react";
import "../css/auth/login.css";
import TopNavbars from "../components/TopNavbars";

const Login = () => {
  return (
    <>
      <TopNavbars />
      <div className="login-container">
        <div className="testimonials">
          <h2>Students Testimonials</h2>
          {/* Add your testimonials content here */}
        </div>

        <div className="login-form">
          <h2>Login</h2>
          <p>Welcome back! Please log in to your account.</p>
          <label>Email</label>
          <input type="email" placeholder="Enter your Email" />
          <label>Password</label>
          <input type="password" placeholder="Enter your Password" />
          <div className="forgot-password">Forgot Password?</div>
          <button className="login-button">Login</button>
          <button className="google-login-button">
            Login with Google
            {/* You can add Google icon here */}
          </button>
          Don't have an account?
          {/* Add link to sign up page */}
          Sign Up!
        </div>
      </div>
    </>
  );
};

export default Login;
