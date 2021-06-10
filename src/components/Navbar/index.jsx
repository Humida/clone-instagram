import "../../style/navbar.css";
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Chat from "../Chat/index";
Navbar.propTypes = {};

function Navbar(props) {
  return (
    <div className="navbar">
      <div className="navbar__title">DooxooP</div>
      <div className="navbar__search">
        <input type="text" />
      </div>
      <div className="navbar__direction">
        <Link to="/">
          <i className="icofont-home"></i>
        </Link>
        <Link to="/chat">
          <i class="icofont-ui-message"></i>
        </Link>
        <Link>
          <i class="icofont-notification"></i>
        </Link>
        <Link to="/account">
          <i class="icofont-ui-user"></i>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
