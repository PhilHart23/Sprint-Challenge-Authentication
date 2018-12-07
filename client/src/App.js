import React, { Component } from "react";
import "./App.css";
import { Route, NavLink } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Jokes from "./components/Jokes";

class App extends Component {
  render() {
    return (
      <div className="App">
        
          <nav>
            <NavLink to="/">Sign Up</NavLink>
            &nbsp; | &nbsp;
            <NavLink to="/jokes">Jokes</NavLink>
            &nbsp; | &nbsp;
            <NavLink to="/login">Sign In</NavLink>
          </nav>
          <section>
            <Route exact path="/" component={Register} />
            <Route path="/jokes" component={Jokes} />
            <Route path="/login" component={Login} />
          </section>
       
      </div>
    );
  }
}

export default App;
