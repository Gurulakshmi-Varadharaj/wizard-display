import React, { useContext } from "react";
import { WizardContext } from "../context/WizardContext";
import './Wizard.scss';

const BasicInformation = ()=>{

  const {continueStep, handleChange, userInput} = useContext(WizardContext);

  return (
    <form className='form' autoComplete="off" onSubmit={event => event.preventDefault()}>
      <p>Basic Information</p>
      <input className='input' name="firstname" placeholder='First Name' onChange={handleChange} value={userInput.firstname} />
      <input className='input' name="lastname" placeholder='Last Name' onChange={handleChange} value={userInput.lastname}/>
      <input className='input' name="dob" placeholder='DD/MM/YYYY' onChange={handleChange} value={userInput.dob}/>
      <div className="actions">
        <button onClick={continueStep}>Continue</button>
      </div>
    </form>
  );
}

export default BasicInformation;