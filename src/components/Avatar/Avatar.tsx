import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import {RootState} from '../../app/rootReducer';
import { AppPaths, AuthStatus } from '../../const';
import { selectUserInfo } from '../../features/user/userSlice';

const Avatar: React.FC = () => {
  const { authStatus } = useSelector((state: RootState) => state.user);
  const { name, avatarUrl } = useSelector(selectUserInfo);

  const isLogged = AuthStatus.AUTH === authStatus;

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          {isLogged
            ? <Link to={`${AppPaths.FAVORITE}`} className="header__nav-link header__nav-link--profile">
                <div className="header__avatar-wrapper user__avatar-wrapper">
                  <img src={avatarUrl} alt="User avatar" />
                </div>
                <span className="header__user-name user__name">{name}</span>
              </Link>

            : <Link to={`${AppPaths.LOGIN}`} className="header__nav-link header__nav-link--profile">
              <div className="header__avatar-wrapper user__avatar-wrapper">
              </div>

              <span className="header__login">Sign in</span>
            </Link>
          }
        </li>
      </ul>
    </nav>
  );
};

export default Avatar;
