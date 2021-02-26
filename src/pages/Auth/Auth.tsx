import React from 'react';

import Header from '../../components/Header/Header';
import SignInForm from '../../components/SighInForm/SignInForm';

const Auth: React.FC = () => (
    <div className="page page--gray page--login">
      <Header />

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <SignInForm />

          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );

export default Auth;
