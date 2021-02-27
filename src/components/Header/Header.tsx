import React from 'react';

import Avatar from '../Avatar/Avatar';
import Logo from '../Logo/Logo';

const Header: React.FC = () => (
  <header className="header">
    <div className="container">
      <div className="header__wrapper">
        <Logo />
        <Avatar />
      </div>
    </div>
  </header>
);

export default Header;
