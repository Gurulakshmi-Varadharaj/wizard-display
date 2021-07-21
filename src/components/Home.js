import React from "react";
import Signup from "./Signup";

const Home = ()=>{
  return(
    <div className="row">
      <div className="row justify-content-center align-items-center bg-info" style={{height:"120px"}}>
        <h5 className="col-sm-8" style={{textAlign:"right"}}>Already have an account?</h5>
        <button className="col-sm-4" style={{width:"80px"}}>Login</button>
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