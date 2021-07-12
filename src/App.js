import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./components/Home";
import Signin from "./components/Signin";
import Signup from "./components/Signup";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path = '/signup'>
            <Signup />
          </Route>
          <Route exact path = '/signin'>
            <Signin />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
