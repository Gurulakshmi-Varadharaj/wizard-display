import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import WizardContextProvider from './context/WizardContext';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <WizardContextProvider>
      <App />
    </WizardContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
