import React, { useContext } from "react";
import { WizardContext } from "../context/WizardContext";
import "./Wizard.scss";

const Display = () => {
  const {reportData} = useContext(WizardContext);
  return(
  <div>
    <table width="1000px">
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
  );
};

export default Display;