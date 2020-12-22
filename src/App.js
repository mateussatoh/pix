import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/index";
import Signin from "./pages/signin";
import Signup from "./pages/signup";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={Signin} exact />
        <Route path="/signup" component={Signup} exact />
      </Switch>
    </Router>
  );
}

export default App;
