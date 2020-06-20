import React from 'react';
import GithubState from './context/github/GithubState';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import User from './components/users/User';
import About from './components/pages/About';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';

import './App.css';
import Background from './components/background/Background'

const App = () => {
  return (
    <GithubState>
      <Router>
        <div className="App">
          <Background />
          <Navbar />
          <Switch>
              <Route exact path='/' component={ Home } />
              <Route exact path='/about' component={ About }/>
              <Route exact path='/user/:login' component={ User }/>
              <Route component={ NotFound } />
          </Switch>
        </div>
      </Router>
    </GithubState>
  );
}

export default App;
