import React from 'react';
import { withRouter } from 'react-router-dom';
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';

import logo from '../../assets/logo.png';
import question from '../../assets/question.png';

import './styles.css';
import { initialValues, handleSubmit, RecoverSchema } from './formSettings';

function Recover({ history }) {
  return (
    <div className="Recover">
      <div />
      <div className="RecoverContainer">
        <img src={logo} alt="Educalis logo" />

        <Formik
          initialValues={initialValues}
          onSubmit={(values, { setSubmitting }) => {
            handleSubmit(values, setSubmitting, history);
          }}
          validationSchema={RecoverSchema}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field name="email" type="email" placeholder="E-mail" />
              <ErrorMessage name="email" component="div" className="errorField" />
              <button type="submit" disabled={isSubmitting}>Enviar</button>
            </Form>
          )}
        </Formik>
      </div>
      <img src={question} alt="people doing a test" />
    </div>
  );
}

export default withRouter(Recover);
