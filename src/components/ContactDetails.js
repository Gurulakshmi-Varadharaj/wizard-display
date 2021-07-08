import React, { useContext } from "react";
import { WizardContext } from "../context/WizardContext";
import './Wizard.scss';

const ContactDetails = ()=>{

  const {continueStep, previousStep, handleChange, userInput} = useContext(WizardContext)

  return (
    <form className='form' autoComplete="off" onSubmit={event => event.preventDefault()}>
      <p>Contact Details</p>
      <input className="input" name="email" placeholder="Email" onChange={handleChange} value={userInput.email}/>
      <input className="input" name="phone" placeholder="Phone" onChange={handleChange} value={userInput.phone}/>
      <input className="input" name="linkedin" placeholder="Linkedin" onChange={handleChange} value={userInput.linkedin}/>
      <div className="actions">
        <button onClick = {previousStep}>Previous</button>
        <button onClick = {continueStep}>Continue</button>
      </div>
    </form>
  );
}

export default ContactDetails;