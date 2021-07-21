import React, { useContext } from "react";
import { WizardContext } from "../context/WizardContext";

const BasicInformation = ()=>{

  const {continueStep, handleChange, userInput} = useContext(WizardContext);

  return (
        <form autoComplete="off" onSubmit={event => event.preventDefault()}>
          <div className="form-group">
            <h4 style={{color:"Blue"}}>Basic Information</h4>
            <input className="form-control" name="firstname" placeholder='First Name' onChange={handleChange} value={userInput.firstname} />
            <br/>
            <input className="form-control" name="lastname" placeholder='Last Name' onChange={handleChange} value={userInput.lastname}/>
            <br/>
            <input className="form-control" name="dob" placeholder='DD/MM/YYYY' onChange={handleChange} value={userInput.dob}/>
            <br/>
            <input className="form-control" type="password" name="password" placeholder='Password' onChange={handleChange} value={userInput.password}/>
            <br/>
            <div>
              <button className="btn btn-info" onClick={continueStep}>Continue</button>
            </div>
          </div>
        </form>
  );
}

export default BasicInformation;