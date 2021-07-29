import React, { useContext } from "react";
import { WizardContext } from "../../context/WizardContext";

const ContactDetails = ()=>{

  const {continueStep, previousStep, handleChange, userInput} = useContext(WizardContext)

  return (
    <form autoComplete="off" onSubmit={event => event.preventDefault()}>
      <div className="form-group">
        <h4>Contact Details</h4>
        <input className="form-control" name="firstname" placeholder='First Name' onChange={handleChange} value={userInput.firstname} />
        <br/>
        <input className="form-control" name="lastname" placeholder='Last Name' onChange={handleChange} value={userInput.lastname}/>
        <br/>
        <input className="form-control" name="phone" placeholder="Phone" onChange={handleChange} value={userInput.phone}/>
        <br/>
        <div>
          <button className="btn btn-info mx-3" onClick = {previousStep}>Previous</button>
          <button className="btn btn-info" onClick = {continueStep}>Continue</button>
        </div>
      </div>
    </form>
  );
}

export default ContactDetails;