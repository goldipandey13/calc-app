import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Calculator from "./components/calculator";

import logo from "./cal.png";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" target="_blank">
              <img src={logo} width="30" height="30" alt="calculator" />
            </a>
            <Link to="/" className="navbar-brand">Calculation App</Link>
          </nav>

          <Route path="/" exact component={Calculator} />
        </div>
      </Router>
    );
  }
}

export default App;
