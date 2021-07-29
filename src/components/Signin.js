import React, { useContext } from 'react';
import { WizardContext } from '../context/WizardContext';
import { useHistory } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import "../styles/Signin.scss";

const Signin = () => {

  const {signInData, errorMsg, setErrorMsg} = useContext(WizardContext);

  let history = useHistory();

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Required!'),
    password: Yup.string().required('Required!').min(6, 'Password should be 6 characters minimum'),
  });

  const onSubmit = (values) =>{
    const checkUser = localStorage.getItem('email');
    if(checkUser === values.email){
      history.push('/display');
      setErrorMsg('');
    }
    else{
      setErrorMsg('Incorrect e-mail id')
    }
  };

  return(
      <div className="row justify-content-center align-items-center sign-in">
        <div>
          <br/>
          <Formik initialValues={signInData} validationSchema={validationSchema} onSubmit={onSubmit}>
            {({values})=>(
            <Form>
              <div className="form-group">
                <h4>Credentials</h4>
                {errorMsg && <div><p className="error">{errorMsg}</p></div>}
                <Field className="form-control" type="email" name="email" placeholder='Email id' />
                <div className="error">
                  <ErrorMessage name="email"/>
                </div>
                <br/>
                <Field className="form-control" type="password" name="password" placeholder='Password' />
                <div className="error">
                  <ErrorMessage name="password"/>
                </div>
                <br/>
                <button className="btn btn-info" type='submit'>Sign in</button>
              </div>
            </Form>
          )}
          </Formik>
        </div>
      </div>
  );
};

export default Signin;