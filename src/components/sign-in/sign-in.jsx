import React, {PureComponent, createRef} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Operation as UserOperation} from '../../store/reducers/user/user-reducer';
import Header from '../header/header.jsx';
import {getCurrentCity} from '../../store/reducers/data/selectors';
import CityPropType from '../../interfaces/city';

class SignIn extends PureComponent {
  constructor(props) {
    super(props);
    this.form = createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();

    const formData = new FormData(this.form.current);

    const email = formData.get(`email`);
    const password = formData.get(`password`);

    this.props.onFormSubmit({email, password});
  }

  render() {
    const city = this.props.currentCity;

    return (
      <div className="page page--gray page--login">
        <Header/>

        <main className="page__main page__main--login">
          <div className="page__login-container container">
            <section className="login">
              <h1 className="login__title">Sign in</h1>
              <form className="login__form form" action="#" method="post" ref={this.form} onSubmit={this.handleSubmit}>
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">E-mail</label>
                  <input className="login__input form__input" type="email" name="email" placeholder="Email" required="" />
                </div>
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">Password</label>
                  <input className="login__input form__input" type="password" name="password" placeholder="Password" required="" />
                </div>
                <button className="login__submit form__submit button" type="submit">Sign in</button>
              </form>
            </section>
            <section className="locations locations--login locations--current">
              <div className="locations__item">
                <a className="locations__item-link" href="#">
                  <span>{city.name}</span>
                </a>
              </div>
            </section>
          </div>
        </main>
      </div>);
  }
}

SignIn.propTypes = {
  onFormSubmit: PropTypes.func,
  currentCity: CityPropType.isRequired,
};

const mapStateToProps = (state) => {
  return {
    currentCity: getCurrentCity(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  onFormSubmit(userData) {
    dispatch(UserOperation.authorizeUser(userData));
  }
});

export {SignIn};
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
