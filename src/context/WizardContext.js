import React, {createContext, useState} from "react";

export const WizardContext = createContext();

const WizardContextProvider = ({children})=>{
  const [currentStep, setCurrentStep]= useState(1);
  const [userInput, setUserInput] = useState([{
    firstname: "",
    lastname: "",
    dob: "",
    email: "",
    phone: "",
    linkedin: "",
    industry: "",
    location: ""
  }]);

  const [reportData, setReportData] = useState([]);

  const continueStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const previousStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleChange = (event) => {
    const newFormData = { ...userInput }
    newFormData[event.target.name] = event.target.value;
    setUserInput(newFormData);
  };

  const submitReport = () => {
    setReportData([...reportData, userInput]);
    setUserInput('');
    setCurrentStep(1);
  };

  return(
    <WizardContext.Provider value={{currentStep, setCurrentStep, continueStep, previousStep, handleChange, userInput, submitReport, reportData}}>
      {children}
    </WizardContext.Provider>
  );
}

export default WizardContextProvider;