import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./style/main.css";
import "./style/helper.css";
import "../src/icofont/icofont.min.css";

// React
import { useState } from "react";

// import component
import Navbar from "./components/Navbar/index";
import Chat from "./components/Chat/index";
import Auth from "./components/Auth/index";
import NewFeeds from "./components/NewsFeeds/index";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <Router>
      <div className="app">
        {isLogin && <Navbar />}
        {isLogin ? <NewFeeds /> : <Auth />}
        <Route exact path="/chat" component={Chat} />
        <Route exact path="/account" component={Auth} />
      </div>
    </Router>
  );
}

export default App;
