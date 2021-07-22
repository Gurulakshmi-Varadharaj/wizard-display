import React from "react";
import Signup from "./Signup";
import { useHistory } from "react-router-dom";

const Home = ()=>{

  let history = useHistory();

  return(
    <div className="row">
      <div className="row justify-content-center align-items-center bg-info" style={{height:"120px"}}>
        <h1 classNae = "col-sm-2" style={{textAlign:"center"}}>DEMO WEB PAGE</h1>
        <h5 className="col-sm-8" style={{textAlign:"right"}}>Already have an account?</h5>
        <button className="col-sm-4" style={{width:"80px"}} onClick={()=>{history.push('/signin')}}>Login</button>
      </div>
      <div className="row justify-content-center align-items-center">
        <div style={{width:"500px"}}>
          <br/>
          <Signup />
        </div>
      </div>
    </div>
  )
};

export default Home;