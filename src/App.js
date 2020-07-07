import React from 'react';
import FormValidation from "./Forms/FormValidation";
import './App.css';
import Home from './Home/Home';
import About from './About/About';
import Contact from './Contact/Contact';
import Login from './Forms/Login';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/" id="link">Home</Link>
              </li>
              <li>
                <Link to="/about" id="link">About</Link>
              </li>
              <li>
                <Link to="/contact"id="link">Contact</Link>
              </li> 
              <li>
                <Link to="/register" id="link">Register</Link>
              </li>
              <li>
                <Link to="/login" id="link">Login</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/register">
              <FormValidation />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>

  );
}

export default App;
