import React, { useContext } from "react";
import { WizardContext } from "../context/WizardContext";
import BasicInformation from "./BasicInformation";
import ContactDetails from "./ContactDetails";
import JobPreferences from "./JobPreferences";

const Signup = () => {
  const {currentStep, reportData} = useContext(WizardContext);

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
      <div>
        <h2 style={{color:"Blue", textAlign:"Center"}}>Create Account to Apply</h2>
        {goToStep(currentStep)}
      </div>
  );
};

export default Signup;