import React from 'react';
import { Link } from 'react-router-dom';

import { AppPaths } from '../../const';

const Avatar: React.FC = () => (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link to={`${AppPaths.LOGIN}`} className="header__nav-link header__nav-link--profile">
            <div className="header__avatar-wrapper user__avatar-wrapper">
            </div>
            <span className="header__login">Sign in</span>
            {/* <span className="header__user-name user__name">Oliver.conner@gmail.com</span>*/}
          </Link>
        </li>
      </ul>
    </nav>
  );

export default Avatar;
