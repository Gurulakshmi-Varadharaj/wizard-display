import React, { useContext } from "react";
import { WizardContext } from "../../context/WizardContext";

const JobPreferences = ()=>{

  const {previousStep, handleChange, userInput, submitReport} = useContext(WizardContext);

  return (
    <form autoComplete="off" onSubmit={event => event.preventDefault()}>
        <div className="form-group">
          <h4>Job Preferences</h4>
          <select className="form-control form-select" id="industry" name="industry" onChange={handleChange} value={userInput.industry}>
            <option value="">Select Industry</option>
            <option value="Information Technology">Information Technology</option>
            <option value="Mechanical Engineering">Mechanical Engineering</option>
          </select>
          <br/>
          <select className="form-control form-select" id="location" name="location" onChange={handleChange} value={userInput.location}>
            <option value="">Select Location</option>
            <option value="Ottawa">Ottawa</option>
            <option value="Toronto">Toronto</option>
          </select>
          <br/>
          <div>
            <button className="btn btn-info mx-3" onClick = {previousStep}>Previous</button>
            <button className="btn btn-info" onClick={submitReport}>Submit</button>
          </div>
        </div>
     </form>
  );
}

export default JobPreferences;