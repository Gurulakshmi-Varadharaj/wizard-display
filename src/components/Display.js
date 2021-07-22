import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { WizardContext } from "../context/WizardContext";
import "./Wizard.scss";

const Display = () => {

  const {reportData} = useContext(WizardContext);

  let history = useHistory();

  return(
    <div className="row">
      <div className="row justify-content-center align-items-center bg-info" style={{height:"120px"}}>
        <h1 className="col-sm-8" style={{textAlign:"Center"}}>Profile!</h1>
        <button className="col-sm-4" style={{width:"80px"}} onClick={()=>{history.push('/signin')}}>Logout</button>
      </div>
      <div className="table">
        <br />
        <table width="1000px" className="container">
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