import React from 'react';
import Register from "./Forms/Register";
import './App.css';
import Home from './Home/Home';
import About from './About/About';
import Contact from './Contact/Contact';
import Login from './Forms/Login';
import ProtectedRouter from './Forms/Protected';
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
                <Link to="/contact" id="link">Contact</Link>
              </li>
            </ul>
            <ul className="right-ul">
              <li className="right-li">
                <Link to="/register" id="link" className="right">Register</Link>
              </li>
              <li className="right-li">
                <Link to="/login" id="link" className="right">Login</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/register">
              <Register />
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
              <Login />
            </Route>
            <ProtectedRouter exact path="/home" component={Home} />
          </Switch>
        </div>
      </Router>
    </div>

  );
}

export default App;
