import React, { useContext } from "react";
import { WizardContext } from "../context/WizardContext";
import BasicInformation from "./BasicInformation";
import ContactDetails from "./ContactDetails";
import Display from "./Display";
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
        <p>Create Account to Apply</p>
        {goToStep(currentStep)}
        <br />
        {reportData.length > 0 ? <Display /> : ''}
    </div>
  );
};

export default Signup;