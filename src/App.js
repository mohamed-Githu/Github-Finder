import React from "react";
import GithubState from "./context/github/GithubState";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import User from "./components/users/User";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";

import "./App.css";
import Background from "./components/background/Background";
import theme from "./components/theme";

const App = () => {
  return (
    <GithubState>
      <Router>
        <ThemeProvider theme={theme}>
          <div className="App">
            <Background />
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/user/:login" component={User} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </ThemeProvider>
      </Router>
    </GithubState>
  );
};

export default App;
