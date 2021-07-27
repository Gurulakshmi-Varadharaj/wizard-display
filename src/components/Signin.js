import React, { useContext } from 'react';
import { WizardContext } from '../context/WizardContext';
import { useHistory } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Signin = () => {

  const {signInData} = useContext(WizardContext);

  let history = useHistory();

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Required!'),
    password: Yup.string().required('Required!')
  });

  const onSubmit = (values) =>{
    history.push('/display');
  };

  return(
      <div className="row justify-content-center align-items-center">
        <div>
          <br/>
          <Formik initialValues={signInData} validationSchema={validationSchema} onSubmit={onSubmit}>
            {({values})=>(
            <Form>
              <div className="form-group">
                <h4>Credentials</h4>
                <Field className="form-control" type="email" name="email" placeholder='Email id' />
                <ErrorMessage className="errorMsg" name="email"/>
                <br/>
                <Field className="form-control" type="password" name="password" placeholder='Password' />
                <div>
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