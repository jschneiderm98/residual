import React from 'react';
import { withRouter } from 'react-router-dom';
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';

import logo from '../../assets/logo.png';
import education from '../../assets/education.svg';

import './styles.css';
import { initialValues, handleSubmit, SignupSchema } from './formSettings';

function Signup({ history }) {
  return (
    <div className="Signup">
      <div />
      <div className="SignupContainer">
        <img src={logo} alt="Educalis logo" />

        <Formik
          initialValues={initialValues}
          onSubmit={(values, { setSubmitting }) => {
            handleSubmit(values, setSubmitting, history);
          }}
          validationSchema={SignupSchema}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field name="nome" placeholder="Nome da escola" />
              <ErrorMessage name="nome" component="div" className="errorField" />
              <Field name="matricula" placeholder="Matrícula" />
              <ErrorMessage name="matricula" component="div" className="errorField" />
              <Field name="email" type="email" placeholder="E-mail" />
              <ErrorMessage name="email" component="div" className="errorField" />
              <Field name="senha" type="password" placeholder="Senha" />
              <ErrorMessage name="senha" component="div" className="errorField" />
              <button type="submit" disabled={isSubmitting}>Criar conta</button>
            </Form>
          )}
        </Formik>
      </div>
      <img src={education} alt="people doing a test" />
    </div>
  );
}

export default withRouter(Signup);
