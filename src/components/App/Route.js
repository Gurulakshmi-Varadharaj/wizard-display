import React from "react";
import { Route } from "react-router-dom";

const AppRoutes = ({
  component: Component,
  path,
}) => {
  return(
    <Route 
    path={path}
    render={(props) => <Component {...props}/>}
    />
  );
}

export default AppRoutes