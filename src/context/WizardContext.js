import React, {createContext, useState} from "react";

export const WizardContext = createContext();

const WizardContextProvider = ({children})=>{
  const [currentStep, setCurrentStep]= useState(1);
  const [userInput, setUserInput] = useState([{
    firstname: "",
    lastname: "",
    dob: "",
    password: "",
    email: "",
    phone: "",
    linkedin: "",
    industry: "",
    location: ""
  }]);

  const [signInData, setSignInData] = useState([{
    email: "",
    password: ""
  }])

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
    <WizardContext.Provider value={{currentStep, signInData, setCurrentStep, continueStep, previousStep, handleChange, userInput, submitReport, reportData}}>
      {children}
    </WizardContext.Provider>
  );
}

export default WizardContextProvider;