import { Formik, Form, useField, FieldInputProps, FieldHookConfig } from 'formik';
import React from 'react';

import BaseTextField from '../TextField/TextField';

import { Debug } from './Debug';
import { validationSchema } from './validationSchema';

interface FormValues {
  email: string;
  password: string;
}

const SignInForm: React.FC = () => {
  const handleSubmit = (values: FormValues) => {

  };


  return (
    <section className="login">
      <h1 className="login__title">Sign in</h1>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({isSubmitting}) => (
          <Form className="login__form form" method="post">
            <div className="login__input-wrapper form__input-wrapper">
              <BaseTextField
                id="email"
                label="E-mail"
                name="email"
                type="email"
                placeholder="Email"
              />
            </div>

            <div className="login__input-wrapper form__input-wrapper">
              <BaseTextField
                id="password"
                label="Password"
                name="password"
                type="password"
                placeholder="Password"
              />
            </div>

            <button
              className="login__submit form__submit button"
              type="submit"
              disabled={isSubmitting}
            >
              Sign in
            </button>
          <Debug/>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default SignInForm;
