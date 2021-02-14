import React from 'react';
import Logo from '../header/logo/Logo';
import Book from '../header/book/Book';
import Help from '../header/help/Help';

import style from './style.module.css';

function Header() {
  return (
    <div>
      <Logo />
      <Book />
      <Help />
    </div>
  );
}

export default Header;
