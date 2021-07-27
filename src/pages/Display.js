import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { WizardContext } from "../context/WizardContext";
import "../styles/Display.scss";

const Display = () => {

  const {reportData} = useContext(WizardContext);

  let history = useHistory();

  return(
    <div className="row display">
      <div className="row justify-content-center align-items-center bg-info height">
        <h1 className="col-sm-11 center">Profile!</h1>
        <button className="col-sm-4 button-width" onClick={()=>{history.push('/')}}>Logout</button>
      </div>
      <div className="table">
        <br />
        <table className="container">
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Date of Birth</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Linkedin</th>
            <th>Industry</th>
            <th>Location</th>
          </tr>
            {reportData.map((data) => (
            <tr key={data.email}>
              <td>{data.firstname}</td>
              <td>{data.lastname}</td>
              <td>{data.dob}</td>
              <td>{data.email}</td>
              <td>{data.phone}</td>
              <td>{data.linkedin}</td>
              <td>{data.industry}</td>
              <td>{data.location}</td>
            </tr>
            ))}
        </table>
      </div>
  </div>
  );
};

export default Display;