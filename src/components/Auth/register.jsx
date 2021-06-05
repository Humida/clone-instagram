import React, { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

Regisger.propTypes = {};

function Regisger(props) {
  const [data, setData] = useState({
    gmail: null,
    name: null,
    username: null,
    password: null,
  });
  console.log(data);
  async function handleClick() {
    try {
      let response = await axios.post(
        "http://localhost:4000/user/register",
        data,
        setData
      );
      alert(`Error : ${response.data}`);
    } catch (error) {
      console.log(error);
    }
  }

  function handleName(e) {
    const cloneObj = Object.assign({}, data, { name: e.target.value });
    setData(cloneObj);
  }

  function handleEmail(e) {
    const cloneObj = Object.assign({}, data, { gmail: e.target.value });
    setData(cloneObj);
  }

  function handleUsername(e) {
    const cloneObj = Object.assign({}, data, { username: e.target.value });
    setData(cloneObj);
  }

  function handlePassword(e) {
    const cloneObj = Object.assign({}, data, { password: e.target.value });
    setData(cloneObj);
  }
  return (
    <div className="registers">
      <div className="register__container">
        <div className="register__container-head">
          <div className="register__container-head-title">Dooxoop</div>
          <div className="register__container-head-desc">
            Sign up to see photos and videos from your friends.
          </div>
        </div>
        <div className="register__container-option">
          <div className="option__social">
            <i class="icofont-facebook"></i>
            <Link>Login in with Facebook</Link>
          </div>
          <div className="seperate">
            <div></div>
            <p>OR</p>
            <div></div>
          </div>
          <div className="option__normal">
            <form action="" id="form__login">
              <input
                type="text"
                placeholder="Email"
                name="email"
                onBlur={handleEmail}
              />
              <input
                type="text"
                placeholder="Name"
                name="name"
                onBlur={handleName}
              />
              <input
                type="text"
                placeholder="Username"
                name="username"
                onBlur={handleUsername}
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                onBlur={handlePassword}
              />
            </form>
            <button onClick={handleClick}>
              <Link>Sing up</Link>
            </button>
          </div>
        </div>
        <div className="register__container-desc">
          By signing up, you agree to our Terms , Data Policy and Cookies Policy
        </div>
      </div>
      <div className="register__redirect-login">
        <p>Have a account ?</p>
        <Link> Sing in</Link>
      </div>
    </div>
  );
}

export default Regisger;
