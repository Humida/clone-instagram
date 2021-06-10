import { useState } from "react";
import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// state
import { useRecoilState } from "recoil";
import { adminState } from "../../state/adminState";
// import { loginState } from "../../state/loginState";

Login.propTypes = {};

function Login(props) {
  const [admin, setAdmin] = useRecoilState(adminState);

  const [data, setData] = useState({
    option: null,
    password: null,
  });

  async function handleClick() {
    try {
      let response = await axios.post("http://localhost:4000/user/login", data);
      console.log(response);
      if (typeof response.data == "object") {
        setAdmin(response.data);
        console.log("done");
      }
    } catch (error) {
      console.log(error);
    }
  }

  function handleName(e) {
    const cloneObj = Object.assign({}, data, { option: e.target.value });
    setData(cloneObj);
  }

  function handlePassword(e) {
    const cloneObj = Object.assign({}, data, { password: e.target.value });
    setData(cloneObj);
  }
  return (
    <div className="login">
      <div className="login__container">
        <h2>Dooxoop</h2>
        <div className="login__local">
          <form action="">
            <input
              type="text"
              placeholder="Email or Username"
              onBlur={handleName}
            />
            <input type="text" placeholder="Password" onBlur={handlePassword} />
          </form>
          <button onClick={handleClick}>Log In</button>
        </div>
        <div className="seperate">
          <div></div>
          <p>OR</p>
          <div></div>
        </div>
        <div className="login__social">
          <i class="icofont-facebook"></i>
          <p>Log in with Facebook</p>
        </div>
        <Link>Fogot password</Link>
      </div>
      <div className="login__redirect-singin">
        <p>Don't have an account</p>
        <Link onClick={props.handleToRegister}>Sign up</Link>
      </div>
    </div>
  );
}
export default Login;
