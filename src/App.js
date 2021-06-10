import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./style/main.css";
import "./style/helper.css";
import "../src/icofont/icofont.min.css";
import io from "socket.io-client";
// manage state
import { useRecoilState } from "recoil";
// import { loginState } from "./state/loginState";
import { adminState } from "./state/adminState";

import { useState } from "react";

// import component
import Navbar from "./components/Navbar/index";
import Chat from "./components/Chat/index";
import Auth from "./components/Auth/index";
import NewFeeds from "./components/NewsFeeds/index";
import Login from "./components/Auth/login";

function App({ loaded }) {
  const [admin, setAdmin] = useRecoilState(adminState);
  // if (!loaded) {
  //   return null;
  // }

  return (
    <Router>
      <div className="app">
        {admin !== null && <Navbar />}
        <Route
          exact
          path="/"
          component={() => {
            return admin !== null ? <NewFeeds /> : <Auth />;
          }}
        />
        <Route exact path="/chat" component={Chat} />
        <Route exact path="/account" component={Auth} />
      </div>
    </Router>
  );
}

export default App;
