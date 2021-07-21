import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./components/Home";
import Signin from "./components/Signin";
import Display from "./components/Display";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path = '/signin' component={Signin} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
