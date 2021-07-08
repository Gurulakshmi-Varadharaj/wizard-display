import React, { useContext } from "react";
import BasicInformation from "./components/BasicInformation";
import ContactDetails from "./components/ContactDetails";
import Display from "./components/Display";
import JobPreferences from "./components/JobPreferences";
import { WizardContext } from "./context/WizardContext";

function App() {

const {currentStep, reportData} = useContext(WizardContext);

  const goToStep = (step) =>{
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
    <div className="App">
      <div>
        <p>Create Account to Apply</p>
        {goToStep(currentStep)}
        <br />
        {reportData.length > 0 ? <Display /> : ''}
      </div>
    </div>
  );
}

export default App;
