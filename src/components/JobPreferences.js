import React, { useContext } from "react";
import { WizardContext } from "../context/WizardContext";
import './Wizard.scss';

const JobPreferences = ()=>{

  const {previousStep, handleChange, userInput, submitReport} = useContext(WizardContext);

  return (
    <form className='form' autoComplete="off" onSubmit={event => event.preventDefault()}>
      <p>Job Preferences</p>
        <select className='label' id="industry" name="industry" onChange={handleChange} value={userInput.industry}>
          <option value="">Select Industry</option>
          <option value="Information Technology">Information Technology</option>
          <option value="Mechanical Engineering">Mechanical Engineering</option>
        </select>
        <select className='label' id="location" name="location" onChange={handleChange} value={userInput.location}>
          <option value="">Select Location</option>
          <option value="Ottawa">Ottawa</option>
          <option value="Toronto">Toronto</option>
        </select>
      <div className="actions">
        <button onClick = {previousStep}>Previous</button>
        <button onClick={submitReport}>Submit</button>
      </div>
    </form>
  );
}

export default JobPreferences;