import React from "react";
import { useHistory } from "react-router-dom";
import Signin from "../components/Signin";
import "../styles/Home.scss";

const Home = ()=>{

  let history = useHistory();

  return(
    <div className="row home">
      <div className="row justify-content-center align-items-center bg-info height">
        <h1 className="col-sm-7 right">DEMO WEB PAGE</h1>
        <h5 className="col-sm-4 right">Don't have an account?</h5>
        <button className="col-sm-1" onClick={()=>{history.push(`/signup`)}}>Register</button>
      </div>
      <div className="row justify-content-center align-items-center">
        <div className="area-width">
          <br/>
          <Signin />
        </div>
      </div>
    </div>
  )
};

export default Home;