import React from "react";
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import {routes}  from "../../config/routes";
import AppRoutes from "../App/Route"

function App() {
  return (
      <Router>
        <Switch>
          {routes.map((route) =>(
            <AppRoutes 
              key={route.path}
              path={route.path}
              exact={true}
              component={route.component}
            />
          ))}
        </Switch>
      </Router>
  );
}

export default App;
