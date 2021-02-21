import React from 'react';

import Avatar from '../Avatar/Avatar';
import Logo from '../Logo/Logo';

const Header: React.FC = () =>
  // const userName = isAuthorized
  //   ? <span className="header__user-name user__name">{user.email}</span>
  //   : <span className="header__login">Sign in</span>;

    (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Logo />
          <Avatar />
        </div>
      </div>
    </header>
  )
;

export default Header;
