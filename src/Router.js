import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Launch from "./App";
import Introduce from "./Introduce";
import Login from "./Login";
import Register from "./Register";

import Theme from "./Theme";

export default () => {
  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <Route path="/" exact component={Login} />
        <Route path="/register/" component={Register} />
        <Route path="/main/" component={Launch} />
      </Router>
    </ThemeProvider>
  );
};
