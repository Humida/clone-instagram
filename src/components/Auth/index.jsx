import React from "react";
import { useState } from "react";
import { Link, Router } from "react-router-dom";
import PropTypes from "prop-types";
import "../../style/auth.css";

// import components
import Login from "./login";
import Register from "./register";
Auth.propTypes = {};

function Auth(props) {
  const [isHaveAccount, setIsHaveAccount] = useState(true);
  function handleToLogin() {
    setIsHaveAccount(true);
  }

  function handleToRegister() {
    setIsHaveAccount(false);
  }
  return (
    <div className="auth">
      {isHaveAccount ? (
        <Login handleToRegister={handleToRegister} />
      ) : (
        <Register handleToLogin={handleToLogin} />
      )}
    </div>
  );
}

export default Auth;
