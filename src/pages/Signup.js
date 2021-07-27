import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { WizardContext } from "../context/WizardContext";
import BasicInformation from "../components/createaccount/BasicInformation";
import ContactDetails from "../components/createaccount/ContactDetails";
import JobPreferences from "../components/createaccount/JobPreferences";
import "../styles/Signup.scss";

const Signup = () => {
  const {currentStep} = useContext(WizardContext);

  let history = useHistory();

  const goToStep = (step) => {
    switch(step){
    case 1:
      return <BasicInformation />
    case 2:
      return <ContactDetails />
    case 3:
      return <JobPreferences />
    default:
    }
  }

  return (
    <div className="row sign-up">
      <div className="row justify-content-center align-items-center bg-info height">
        <h1 className = "col-sm-7 right">Sign Up</h1>
        <h5 className="col-sm-4 right">Already have an account?</h5>
        <button className="col-sm-1" onClick={()=>{history.push('/')}}>Login</button>
      </div>
      <div className="row justify-content-center align-items-center">
        <div className="area-width">
          <h3 className="center">Create Account to Apply</h3>
          {goToStep(currentStep)}
        </div>
      </div>
    </div>
  );
};

export default Signup;