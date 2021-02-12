import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {AppPaths, END_POINT} from '../../const';
import UserPropType from '../../interfaces/user';
import {getAuthStatus, getUserInfo} from '../../store/reducers/user/selectors';

const Header = ({isAuthorized, user}) => {
  const userName = isAuthorized
    ? <span className="header__user-name user__name">{user.email}</span>
    : <span className="header__login">Sign in</span>;

  const activeLogo = (
    <Link to={AppPaths.getRoot()} className="header__logo-link header__logo-link--active">
      <img className="header__logo" src="/img/logo.svg" alt="6 cities logo" width="81" height="41"/>
    </Link>);

  const inactiveLogo = (
    <a className="header__logo-link">
      <img className="header__logo" src="/img/logo.svg" alt="6 cities logo" width="81" height="41"/>
    </a>);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            {isAuthorized ? activeLogo : inactiveLogo}
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                {isAuthorized ? (
                  <Link to={AppPaths.getRoot()} className="header__nav-link header__nav-link--profile" href="#">
                    <div
                      className={`header__avatar-wrapper ${user.isPro ? 'header__avatar-wrapper--pro' : ''} user__avatar-wrapper`}
                      style={{backgroundImage: `url(${END_POINT}${user.avatar})`}}
                    >
                    </div>
                    {userName}
                  </Link>
                ) : (
                  <Link to={AppPaths.getRoot()}>Sign in</Link>
                )}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};


Header.propTypes = {
  isAuthorized: PropTypes.bool.isRequired,
  user: UserPropType,
};

const mapStateToProps = state => ({
  isAuthorized: getAuthStatus(state),
  user: getUserInfo(state),
});

export {Header};
export default connect(mapStateToProps)(Header);
