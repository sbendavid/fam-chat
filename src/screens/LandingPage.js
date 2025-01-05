import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      <h1>Welcome to the Chat App</h1>
      <p>To get started, sign up or log in:</p>
      <Link to="/signup">Sign Up</Link> {/* Navigates to the signup page */}
      <Link to="/login">Login</Link> {/* Navigates to the login page */}
    </div>
  );
};

export default LandingPage;
