import {Formik, Form, FormikHelpers, FormikHandlers, FormikFormProps} from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';

import { authenticateUser } from '../../features/user/userSlice';
import BaseTextField from '../TextField/TextField';

import { Debug } from './Debug';
import { validationSchema } from './validationSchema';

interface FormValues {
  email: string;
  password: string;
}

const SignInForm: React.FC = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values: FormValues, { resetForm }: any) => {
    const { email, password } = values;

    dispatch(authenticateUser(email, password));
    resetForm();
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
              {!isSubmitting ? 'Sign in' : 'Signing in'}
            </button>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default SignInForm;
