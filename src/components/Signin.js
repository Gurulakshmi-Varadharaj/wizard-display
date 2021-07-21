import React, { useContext } from 'react';
import { WizardContext } from '../context/WizardContext';
import { useHistory } from 'react-router-dom';

const Signin = () => {

  const { signInData } = useContext(WizardContext);
  let history = useHistory();

  return(
    <div className="row">
      <div className="row justify-content-center align-items-center bg-info" style={{height:"120px"}}>
        <h3 className="col-sm-8" style={{textAlign:"center"}}>Login!</h3>
      </div>
      <div className="row justify-content-center align-items-center">
        <div style={{width:"500px"}}>
          <br/>
          <form autoComplete="off" onSubmit={event => event.preventDefault()}>
          <div className="form-group">
            <h4 style={{color:"Blue"}}>Credentials</h4>
            <input className="form-control" name="email" placeholder='Email id' value={signInData.email} />
            <br/>
            <input className="form-control" type="password" name="password" placeholder='Password' value={signInData.password}/>
            <br/>
            <button className="btn btn-info" onClick={()=>{history.push('/display')}}>Sign in</button>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;