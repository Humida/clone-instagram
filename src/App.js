import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./style/main.css";
import "./style/helper.css";
import "../src/icofont/icofont.min.css";

// manage state
import { useRecoilState } from "recoil";
import { loginState } from "./state/loginState";

// React
import { useState } from "react";

// import component
import Navbar from "./components/Navbar/index";
import Chat from "./components/Chat/index";
import Auth from "./components/Auth/index";
import NewFeeds from "./components/NewsFeeds/index";
import Login from "./components/Auth/login";
import { loginState } from "./state/loginState";

function App() {
  const [login, setLogin] = useRecoilState(loginState);
  console.log(login);
  return (
    <Router>
      <div className="app">
        {login.isLogin && <Navbar />}
        <Route
          exact
          path="/"
          component={() => {
            return login.isLogin ? <NewFeeds /> : <Auth />;
          }}
        />

        <Route exact path="/chat" component={Chat} />
        <Route exact path="/account" component={Auth} />
      </div>
    </Router>
  );
}

export default App;
