import React from "react";
import { View, Text } from "react-native";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Launch from "./App";
import Introduce from "./Introduce";
import Login from "./Login";
import Register from "./Register";

export default () => {
  return (
    <Router>
      <Route path="/" exact component={Launch} />
      <Route path="/lanuch/" component={Launch} />
      <Route path="/login/" component={Login} />
      <Route path="/register/" component={Register} />
    </Router>
  );
};
